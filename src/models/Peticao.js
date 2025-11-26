const mongoose = require('mongoose');

const petitionSchema = new mongoose.Schema({
    assinaturas: [{
        type: String // Array of user IDs or signatures
    }],
    criadorId: {
        type: String,
        required: true
    },
    criadorNome: {
        type: String,
        required: true
    },
    dataCriacao: {
        type: Number, // Timestamp as per image
        default: () => Date.now()
    },
    descricao: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    totalAssinaturas: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true // Mongoose adds createdAt/updatedAt, but we also have dataCriacao from the image
});

module.exports = mongoose.model('Petition', petitionSchema);
