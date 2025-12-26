import Order from '../models/Order.js';
import Cart from '../models/Cart.js';

export const createOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const shippingAddress = req.body.address;
    if (!shippingAddress || !shippingAddress.street || !shippingAddress.city || !shippingAddress.state || !shippingAddress.zipCode || !shippingAddress.country) {
      return res.status(400).json({ message: 'Incomplete shipping address' });
    }

    const items = cart.items.map(i => ({
      product: i.product._id,
      name: i.product.name,
      image: i.product.image,
      price: i.price,
      quantity: i.quantity
    }));

    const subtotal = cart.totalAmount;
    const shipping = subtotal > 50 ? 0 : 9.99;
    const tax = Number((subtotal * 0.1).toFixed(2));
    const total = Number((subtotal + shipping + tax).toFixed(2));

    const order = await Order.create({
      user: req.user._id,
      items,
      shippingAddress,
      paymentMethod: 'card',
      subtotal,
      shipping,
      tax,
      total,
      status: 'pending'
    });

    cart.items = [];
    cart.totalAmount = 0;
    await cart.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
