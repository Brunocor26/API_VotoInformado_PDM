const mongoose = require('mongoose');

const sondagemSchema = mongoose.Schema({
    entidade: {
        type: String,
        required: false
    },
    tam_amostra: {
        type: Number,
        required: false
    },
    data_inicio_recolha: {
        type: String, // or Date
        required: false
    },
    data_fim_recolha: {
        type: String, // or Date
        required: false
    },
    metodologia: {
        type: String,
        required: false
    },
    universo: {
        type: String,
        required: false
    },
    margem_erro: {
        type: Number,
        required: false
    },
    nivel_confianca: {
        type: Number,
        required: false
    },
    resultados: {
        type: Map,
        of: Number,
        default: {}
    },
    resultado_dist_indecisos: {
        type: Map,
        of: Number,
        required: false
    },
    titulo: { // Keeping title as it might be useful, or should I remove? The image doesn't show it explicitly but usually polls have titles. I'll keep it optional or remove if strict.
        type: String,
        required: false
    },
    dataCriacao: {
        type: Number,
        default: () => Date.now()
    }
});

// Explicit collection name 'sondagens' to match existing DB documents
module.exports = mongoose.model('Sondagem', sondagemSchema, 'sondagens');
