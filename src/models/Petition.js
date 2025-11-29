const mongoose = require('mongoose');

const petitionSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    criadorId: {
        type: String,
        required: true
    },
    criadorNome: {
        type: String,
        required: true
    },
    assinaturas: {
        type: [String], // Array of User IDs
        default: []
    },
    imageUrl: {
        type: String
    },
    dataCriacao: {
        type: Number, // Store as millis to match Android expectation
        default: () => Date.now()
    }
});

module.exports = mongoose.model('Petition', petitionSchema);
