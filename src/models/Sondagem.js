const mongoose = require('mongoose');

const sondagemSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    opcoes: {
        type: [String],
        required: true
    },
    resultados: {
        type: Map,
        of: Number,
        default: {}
    },
    dataCriacao: {
        type: Number,
        default: () => Date.now()
    }
});

module.exports = mongoose.model('Sondagem', sondagemSchema);
