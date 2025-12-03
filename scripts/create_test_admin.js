const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const User = require('../src/models/User');

async function createTestAdmin() {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/votoinformado');
        
        const email = 'testadmin@example.com';
        const password = 'password123';
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.deleteOne({ email }); // Clean up if exists

        const user = await User.create({
            name: 'Test Admin',
            email,
            password: hashedPassword,
            role: 'admin'
        });

        console.log('Test admin created:', user.email);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.connection.close();
        process.exit(0);
    }
}

createTestAdmin();
