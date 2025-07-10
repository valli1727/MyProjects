const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDatabase = require('./config/connectDatabase');

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const app = express();

// Connect to MongoDB
connectDatabase();

// Middleware
app.use(cors({
  origin: 'http://localhost:4200', // Allow Angular dev server
  credentials: true
}));
app.use(express.json());

// Routes
const products = require('./routes/product');
const orders = require('./routes/order');
app.use('/api/v1', products);
app.use('/api/v1', orders);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
