const mongoose = require('mongoose');
const Candidate = require('../src/models/Candidate');
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/votoinformado');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const verify = async () => {
    await connectDB();
    try {
        const candidate = await Candidate.findOne({ nome: 'Henrique Gouveia e Melo' });
        if (candidate) {
            console.log('Found Candidate:', candidate.nome);
            console.log('Generated ID (slug):', candidate.id);
            if (candidate.id === 'henrique_gouveia_melo') {
                console.log('SUCCESS: Slug is correct.');
            } else {
                console.error('FAILED: Slug is incorrect. Expected henrique_gouveia_melo, got', candidate.id);
            }
        } else {
            console.error('Candidate not found.');
        }
        process.exit(0);
    } catch (error) {
        console.error('Verification Error:', error);
        process.exit(1);
    }
};

verify();
