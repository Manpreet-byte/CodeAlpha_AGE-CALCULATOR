import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="py-40">
      <div className="container">
        <h1 className="page-title">Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <div style={{ marginTop: 24 }}>
          <Link to="/" className="btn btn-primary">Go Home</Link>
          <Link to="/products" className="btn" style={{ marginLeft: 12 }}>Browse Products</Link>
        </div>
      </div>
    </div>
  );
}
