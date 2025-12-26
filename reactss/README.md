# E-Commerce Full-Stack Application

A complete, production-ready e-commerce shopping website built with React (Vite) for the frontend and Node.js/Express for the backend.

## Features

### Frontend
- Modern, responsive UI built with React and Vite
- Pages: Home, Product Listing, Product Detail, Cart, Checkout, Login/Register, Profile
- Product search, filtering by category and price, and sorting
- Shopping cart with add, remove, and update functionalities
- User authentication with JWT tokens
- Context API for state management (Auth & Cart)
- React Router for navigation

### Backend
- RESTful API built with Express.js
- MongoDB database with Mongoose ODM
- JWT authentication
- Password hashing with bcrypt
- Request validation with express-validator
- Error handling middleware
- API endpoints for products, cart, and user management

## Tech Stack

### Frontend
- React 18
- Vite
- React Router DOM
- Axios
- Context API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- express-validator
- CORS
- dotenv

## Project Structure

```
reactss/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── cartController.js
│   │   ├── productController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models/
│   │   ├── Cart.js
│   │   ├── Product.js
│   │   └── User.js
│   ├── routes/
│   │   ├── cartRoutes.js
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│   ├── utils/
│   │   └── generateToken.js
│   ├── .env
│   ├── package.json
│   ├── seeder.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.css
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductCard.css
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── CartContext.jsx
│   │   ├── pages/
│   │   │   ├── Auth.css
│   │   │   ├── Cart.jsx
│   │   │   ├── Cart.css
│   │   │   ├── Checkout.jsx
│   │   │   ├── Checkout.css
│   │   │   ├── Home.jsx
│   │   │   ├── Home.css
│   │   │   ├── Login.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── ProductDetail.css
│   │   │   ├── Products.jsx
│   │   │   ├── Products.css
│   │   │   ├── Profile.jsx
│   │   │   ├── Profile.css
│   │   │   └── Register.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (already created with default values):
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key_change_this_in_production
JWT_EXPIRE=7d
```

4. Seed the database with sample products:
```bash
node seeder.js
```

5. Start the backend server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:3000`

## Usage

1. Start MongoDB (if running locally):
```bash
mongod
```

2. Start backend server (from backend directory):
```bash
npm run dev
```

3. Start frontend server (from frontend directory):
```bash
npm run dev
```

4. Open browser and navigate to `http://localhost:3000`

5. Register a new account or use existing credentials

6. Browse products, add to cart, and complete checkout

## API Endpoints

### Products
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/featured` - Get featured products
- `GET /api/products/categories` - Get all categories
- `GET /api/products/:id` - Get single product

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (protected)
- `PUT /api/users/profile` - Update user profile (protected)

### Cart
- `GET /api/cart` - Get user cart (protected)
- `POST /api/cart` - Add item to cart (protected)
- `PUT /api/cart/item` - Update cart item (protected)
- `DELETE /api/cart/item/:productId` - Remove item from cart (protected)
- `DELETE /api/cart` - Clear cart (protected)

## Features Implemented

### Authentication
- User registration with password hashing
- User login with JWT token generation
- Protected routes requiring authentication
- Token stored in localStorage
- Automatic logout on token expiration

### Product Management
- Display all products with pagination
- Search products by name, description, or brand
- Filter by category and price range
- Sort by price, rating, or newest
- Featured products on homepage
- Product detail page with image gallery

### Shopping Cart
- Add products to cart
- Update product quantities
- Remove products from cart
- Cart persists across sessions
- Real-time cart total calculation
- Stock validation

### Checkout
- Shipping address form
- Payment information form
- Order summary
- Order placement

### User Profile
- View user information
- Edit profile details
- Update shipping address

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key_change_this_in_production
JWT_EXPIRE=7d
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

## Building for Production

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm run preview
```

## License

ISC

## Author

E-Shop Development Team
