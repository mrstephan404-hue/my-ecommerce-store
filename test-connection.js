const mongoose = require('mongoose');
require('dotenv').config();

console.log('Testing MongoDB connection...');
console.log('Connection string:', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('SUCCESS! MongoDB Connected');
    process.exit(0);
  })
  .catch(err => {
    console.error('CONNECTION FAILED');
    console.error('Error:', err.message);
    process.exit(1);
  });