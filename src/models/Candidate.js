const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    partido: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
        default: ''
    },
    propostas: {
        type: [String],
        default: []
    },
    profissao: {
        type: String,
        default: ''
    },
    cargosPrincipais: {
        type: String,
        default: ''
    },
    biografiaCurta: {
        type: String,
        default: ''
    },
    siteOficial: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', candidateSchema);
