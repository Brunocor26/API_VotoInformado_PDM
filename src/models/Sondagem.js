const mongoose = require('mongoose');

const sondagemSchema = new mongoose.Schema({
    dataFimRecolha: {
        type: String, // Keeping as String to match image "2025-10-12", could be Date
        required: false
    },
    dataInicioRecolha: {
        type: String,
        required: false
    },
    entidade: {
        type: String,
        required: true
    },
    margemErro: {
        type: Number,
        required: false
    },
    metodologia: {
        type: String,
        required: false
    },
    nivelConfianca: {
        type: Number,
        required: false
    },
    resultadoDistIndecisos: {
        type: String,
        required: false
    },
    resultadoPrincipal: {
        idCandidato: { type: String },
        percentagem: { type: Number }
    },
    resultados: {
        type: Map,
        of: Number
    },
    tamAmostra: {
        type: Number,
        required: false
    },
    universo: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Sondagem', sondagemSchema);
