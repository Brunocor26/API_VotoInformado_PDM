const mongoose = require('mongoose');

const dateEventSchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    date: {
        type: String, // Keeping as String to match existing usage, or could be Date
        required: true
    },
    idCandidato1: {
        type: String
    },
    idCandidato2: {
        type: String
    },
    time: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    votes: [{
        userId: String,
        candidateId: String
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('DateEvent', dateEventSchema);
