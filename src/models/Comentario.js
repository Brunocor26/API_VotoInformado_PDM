const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
    autorId: {
        type: String,
        required: true
    },
    autorNome: {
        type: String,
        required: true
    },
    dataCriacao: {
        type: Number,
        default: () => Date.now()
    },
    peticaoId: {
        type: String,
        required: true
    },
    texto: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Comentario', comentarioSchema);
