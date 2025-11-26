const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    nome: {
        type: String,
        required: true
    },
    biografiaCurta: {
        type: String,
        required: true
    },
    cargosPrincipais: {
        type: String,
        required: false
    },
    fotoId: {
        type: String, // URL of the photo
        required: false
    },
    fotoNome: {
        type: String,
        required: false
    },
    partido: {
        type: String,
        required: true
    },
    profissao: {
        type: String,
        required: false
    },
    siteOficial: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', candidateSchema);
