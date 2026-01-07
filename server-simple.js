const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let products = [
  { _id: '1', name: 'Nike Air Force 1', price: 430, category: 'Nike', stock: 15, image: '🔴', status: 'active' },
  { _id: '2', name: 'Off-White Sneakers', price: 360, category: 'Off-White', stock: 8, image: '⚪', status: 'active' },
  { _id: '3', name: 'Adidas Classic', price: 360, category: 'Adidas', stock: 12, image: '⚫', status: 'active' },
  { _id: '4', name: 'New Balance 740', price: 380, category: 'New Balance', stock: 10, image: '🟠', status: 'active' },
];

let orders = [];

app.get('/', (req, res) => {
  res.json({ message: '🚀 E-commerce API is running!', status: 'OK' });
});

app.get('/api/products', (req, res) => {
  res.json({ products });
});

app.get('/api/categories', (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  res.json({ categories });
});

app.post('/api/orders', (req, res) => {
  const order = {
    _id: Date.now().toString(),
    orderId: 'ORD-' + Date.now().toString().slice(-8),
    ...req.body,
    createdAt: new Date()
  };
  orders.push(order);
  res.status(201).json({ message: 'Order created!', order });
});

app.listen(PORT, () => {
  console.log(' Server running on port 5000');
  console.log(' API URL: http://localhost:5000');
  console.log(' Running in DEMO mode (no database)');
});