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

const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getCandidates).post(protect, admin, upload.single('photo'), createCandidate);
router.route('/:id').get(getCandidateById);

module.exports = router;
