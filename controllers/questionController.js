const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Mendapatkan semua pertanyaan
exports.getQuestions = async (req, res) => {
  try {
    const questions = await prisma.question.findMany();
    res.status(200).json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal mengambil pertanyaan' });
  }
};

// Menyimpan hasil pengecekan mental ke riwayat
exports.submitAnswers = async (req, res) => {
  try {
    const { userId, answers } = req.body;

    // Tentukan skor berdasarkan urutan pilihan (0 -> paling baik, 4 -> paling buruk)
    const scores = [4, 2, 3, 1, 0]; // Skor untuk masing-masing opsi: option[0] -> 4, option[1] -> 2 (neutral), option[4] -> 0

    // Hitung total skor
    const score = answers.reduce((sum, value) => sum + scores[value], 0);

    let result = '';
    if (score >= 60) result = 'Baik';       // Skor tertinggi
    else if (score >= 30) result = 'Sedang';  // Skor sedang
    else result = 'Buruk';                  // Skor terendah

    const notes = `Total skor: ${score}. Penilaian berdasarkan jawaban Anda.`;

    const history = await prisma.history.create({
      data: {
        userId,
        result,
        notes,
      },
    });

    res.status(201).json({ message: 'Hasil disimpan', history });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal menyimpan hasil' });
  }
};

// Mendapatkan riwayat hasil pengecekan user
exports.getHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const histories = await prisma.history.findMany({
      where: { userId: parseInt(userId) },
      orderBy: { date: 'desc' },
    });
    res.status(200).json(histories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal mengambil riwayat' });
  }
};
