const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/votoinformado';
console.log('Attempting to connect to:', uri.replace(/\/\/.*@/, '//***:***@')); // Mask credentials

mongoose.connect(uri)
    .then(() => {
        console.log('Connection Successful!');
        process.exit(0);
    })
    .catch(err => {
        console.error('Connection Failed:', err.message);
        process.exit(1);
    });
