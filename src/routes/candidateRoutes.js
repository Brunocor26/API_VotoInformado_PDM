const express = require('express');
const router = express.Router();
const { getCandidates, getCandidateById, createCandidate } = require('../controllers/candidateController');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/candidates/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.route('/').get(getCandidates).post(upload.single('photo'), createCandidate);
router.route('/:id').get(getCandidateById);

module.exports = router;
