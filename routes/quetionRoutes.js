const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// Mendapatkan semua pertanyaan
router.get('/questions', questionController.getQuestions);

// Menyimpan hasil pengecekan
router.post('/submit', questionController.submitAnswers);

// Mendapatkan riwayat hasil pengecekan
router.get('/history/:userId', questionController.getHistory);

module.exports = router;
