import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/client';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const { data } = await api.get(`/api/products/${id}`);
      setProduct(data);
      setSelectedImage(data.image);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    setAdding(true);
    const result = await addToCart(product._id, quantity);
    
    if (result.success) {
      setMessage('Added to cart successfully!');
    } else {
      setMessage(result.message);
    }
    
    setAdding(false);
    setTimeout(() => setMessage(''), 3000);
  };

  if (loading) {
    return <div className="loading">Loading product...</div>;
  }

  if (!product) {
    return (
      <div className="container py-60">
        <div className="error-message">Product not found</div>
        <button onClick={() => navigate('/products')} className="btn btn-primary mt-20">
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail py-40">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>

        <div className="product-detail-grid">
          <div className="product-images">
            <div className="main-image">
              <img src={selectedImage} alt={product.name} />
            </div>
            {product.images && product.images.length > 0 && (
              <div className="thumbnail-images">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className={selectedImage === img ? 'active' : ''}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="product-details">
            <div className="product-header">
              <h1 className="product-title">{product.name}</h1>
              <div className="product-meta">
                <span className="category-badge">{product.category}</span>
                {product.brand && <span className="brand-text">by {product.brand}</span>}
              </div>
            </div>

            <div className="rating-section">
              <div className="stars">⭐ {product.rating.toFixed(1)}</div>
              <span className="review-count">({product.numReviews} reviews)</span>
            </div>

            <div className="price-section">
              <span className="price">${product.price.toFixed(2)}</span>
              <span className={`stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </span>
            </div>

            <div className="description-section">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            {product.stock > 0 && (
              <div className="purchase-section">
                <div className="quantity-selector">
                  <label>Quantity:</label>
                  <div className="quantity-controls">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity-value">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={adding}
                  className="btn btn-primary btn-large btn-block"
                >
                  {adding ? 'Adding to Cart...' : 'Add to Cart'}
                </button>

                {message && (
                  <div className={message.includes('success') ? 'success-message' : 'error-message'}>
                    {message}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
