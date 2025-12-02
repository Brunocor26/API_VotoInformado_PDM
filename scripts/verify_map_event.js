const mongoose = require('mongoose');
const DateEvent = require('../src/models/DateEvent');
require('dotenv').config();

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/votoinformado';

async function verify() {
    try {
        await mongoose.connect(uri);
        console.log('Connected to DB');

        // 1. Create an event with location
        const newEvent = await DateEvent.create({
            category: 'Arruada',
            date: '2025-10-01',
            title: 'Grande Arruada em Lisboa',
            location: {
                latitude: 38.7223,
                longitude: -9.1393,
                address: 'Av. da Liberdade'
            }
        });
        console.log('Created event:', newEvent._id);

        // 2. Fetch it back
        const fetchedEvent = await DateEvent.findById(newEvent._id);
        if (fetchedEvent.location && fetchedEvent.location.latitude === 38.7223) {
            console.log('SUCCESS: Location saved and retrieved correctly.');
        } else {
            console.error('FAILURE: Location data missing or incorrect.');
        }

        // 3. Cleanup
        await DateEvent.findByIdAndDelete(newEvent._id);
        console.log('Cleaned up.');

    } catch (err) {
        console.error('Error:', err);
    } finally {
        await mongoose.disconnect();
    }
}

verify();
