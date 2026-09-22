# CodeAlpha Project 1: Simple E-commerce Store

A full-stack e-commerce web application created for the CodeAlpha Full Stack Development Internship.

## Features
- User registration and login with JWT authentication
- Product listing and product-details view
- Shopping cart saved in the browser
- Checkout and order processing
- Order-history page for logged-in users
- MongoDB database for users, products, and orders

## Technology Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT, bcryptjs

## Setup

### 1. Install requirements
Install Node.js, then install MongoDB locally or create a free MongoDB Atlas database.

### 2. Configure environment values
Open the `server` folder, copy `.env.example` to `.env`, and update `MONGO_URI` if needed.

### 3. Install backend packages
```bash
cd server
npm install
```

### 4. Add sample products
```bash
npm run seed
```

### 5. Run the project
```bash
npm run dev
```
Open `http://localhost:5000` in your browser.

## Main API endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/orders`
- `GET /api/orders/my-orders`

## Suggested GitHub repository name
`CodeAlpha_EcommerceStore`
