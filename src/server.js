const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Initialize database connection
connectDB();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// API Routes
app.use('/api/candidates', require('./routes/candidateRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/sondagens', require('./routes/sondagemRoutes'));
app.use('/api/petitions', require('./routes/petitionRoutes'));
app.use('/api/comentarios', require('./routes/comentarioRoutes'));
app.use('/api/dates', require('./routes/dateRoutes'));

// Simple health check endpoint
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
