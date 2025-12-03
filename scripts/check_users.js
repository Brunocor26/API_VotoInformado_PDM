const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const User = require('../src/models/User');

async function checkUsers() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/votoinformado');
        console.log('Connected.');

        const users = await User.find({}, 'name email role');
        console.log('Users found:', users.length);
        users.forEach(user => {
            console.log(`- ${user.name} (${user.email}): ${user.role}`);
        });

    } catch (error) {
        console.error('Error checking users:', error);
    } finally {
        await mongoose.connection.close();
        process.exit(0);
    }
}

checkUsers();
