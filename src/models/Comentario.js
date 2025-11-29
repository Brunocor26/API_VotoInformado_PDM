const mongoose = require('mongoose');

const comentarioSchema = mongoose.Schema({
    texto: {
        type: String,
        required: true
    },
    autorId: {
        type: String,
        required: true
    },
    autorNome: {
        type: String,
        required: true
    },
    autorPhotoUrl: {
        type: String,
        default: ''
    },
    peticaoId: {
        type: String,
        required: true
    },
    dataCriacao: {
        type: Number,
        default: () => Date.now()
    }
});

module.exports = mongoose.model('Comentario', comentarioSchema);
