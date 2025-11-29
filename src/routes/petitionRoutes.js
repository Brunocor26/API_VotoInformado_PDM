const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/petitions/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const { getPetitions, createPetition, signPetition, uploadPetitionImage, deletePetition } = require('../controllers/petitionController');

router.route('/').get(getPetitions).post(createPetition);
router.route('/upload').post(upload.single('image'), uploadPetitionImage);
router.route('/:id').delete(deletePetition);
router.route('/:id/sign').post(signPetition);

module.exports = router;
