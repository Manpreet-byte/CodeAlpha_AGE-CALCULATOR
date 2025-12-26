import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../api/client';
import ProductCard from '../components/ProductCard';
import SkeletonCard from '../components/SkeletonCard';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({ total: 0, pages: 1 });
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    minPrice: '',
    maxPrice: '',
    sort: 'newest'
  });

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const initial = {
      search: searchParams.get('search') || '',
      category: searchParams.get('category') || 'all',
      minPrice: searchParams.get('minPrice') || '',
      maxPrice: searchParams.get('maxPrice') || '',
      sort: searchParams.get('sort') || 'newest'
    };
    setFilters(initial);
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [filters, page]);

  const fetchCategories = async () => {
    try {
      const { data } = await api.get('/api/products/categories');
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const params = {};

      if (filters.search) params.search = filters.search;
      if (filters.category !== 'all') params.category = filters.category;
      if (filters.minPrice) params.minPrice = filters.minPrice;
      if (filters.maxPrice) params.maxPrice = filters.maxPrice;
      if (filters.sort) params.sort = filters.sort;
      params.page = page;
      params.limit = 12;

      const { data } = await api.get('/api/products', { params });
      setProducts(data.products || []);
      setMeta({
        total: data.total || 0,
        pages: data.pages || 1,
        page: data.page || 1
      });
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    setPage(1);
    const nextParams = new URLSearchParams({ ...Object.fromEntries(searchParams), [name]: value });
    setSearchParams(nextParams);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchProducts();
    const nextParams = new URLSearchParams({ ...Object.fromEntries(searchParams), search: filters.search });
    setSearchParams(nextParams);
  };

  const handlePageChange = (direction) => {
    if (direction === 'prev' && page > 1) {
      setPage(page - 1);
    } else if (direction === 'next' && page < meta.pages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="products-page py-40">
      <div className="container">
        <h1 className="page-title">All Products</h1>

        <div className="filters-section">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              name="search"
              placeholder="Search products..."
              value={filters.search}
              onChange={handleFilterChange}
              className="search-input"
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>

          <div className="filters-row">
            <div className="filter-group">
              <label>Category:</label>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Min Price:</label>
              <input
                type="number"
                name="minPrice"
                placeholder="$0"
                value={filters.minPrice}
                onChange={handleFilterChange}
                className="filter-input"
              />
            </div>

            <div className="filter-group">
              <label>Max Price:</label>
              <input
                type="number"
                name="maxPrice"
                placeholder="$1000"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                className="filter-input"
              />
            </div>

            <div className="filter-group">
              <label>Sort By:</label>
              <select
                name="sort"
                value={filters.sort}
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="no-products">
            <p>No products found. Try adjusting your filters.</p>
          </div>
        ) : (
          <>
            <div className="results-bar">
              <div className="results-count">
                Showing {(page - 1) * 12 + 1}–{Math.min(page * 12, meta.total)} of {meta.total} products
              </div>
              <div className="pagination">
                <button
                  className="page-btn"
                  disabled={page === 1}
                  onClick={() => handlePageChange('prev')}
                >
                  Previous
                </button>
                <span className="page-indicator">Page {page} of {meta.pages}</span>
                <button
                  className="page-btn"
                  disabled={page === meta.pages}
                  onClick={() => handlePageChange('next')}
                >
                  Next
                </button>
              </div>
            </div>

            <div className="grid grid-4">
              {products.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            <div className="pagination bottom">
              <button
                className="page-btn"
                disabled={page === 1}
                onClick={() => handlePageChange('prev')}
              >
                Previous
              </button>
              <span className="page-indicator">Page {page} of {meta.pages}</span>
              <button
                className="page-btn"
                disabled={page === meta.pages}
                onClick={() => handlePageChange('next')}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
