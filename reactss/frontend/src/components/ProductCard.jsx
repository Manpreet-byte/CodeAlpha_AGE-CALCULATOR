import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [adding, setAdding] = useState(false);
  const [message, setMessage] = useState('');

  const handleAddToCart = async (e) => {
    e.preventDefault();
    setAdding(true);
    const result = await addToCart(product._id, 1);
    
    if (result.success) {
      setMessage('Added to cart!');
    } else {
      setMessage(result.message);
    }
    
    setAdding(false);
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product._id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          {product.featured && <span className="featured-badge">Featured</span>}
          {product.stock === 0 && <span className="out-of-stock-badge">Out of Stock</span>}
        </div>

        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-category">{product.category}</p>
          
          <div className="product-rating">
            <span className="stars">⭐ {product.rating.toFixed(1)}</span>
            <span className="reviews">({product.numReviews})</span>
          </div>

          <div className="product-footer">
            <span className="product-price">${product.price.toFixed(2)}</span>
            {product.brand && <span className="product-brand">{product.brand}</span>}
          </div>
        </div>
      </Link>

      <div className="product-actions">
        <button
          onClick={handleAddToCart}
          disabled={adding || product.stock === 0}
          className="btn btn-primary btn-block"
        >
          {adding ? 'Adding...' : product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
        {message && <p className="add-message">{message}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
