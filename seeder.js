const { PrismaClient } = require('@prisma/client');
const prismaClient = new PrismaClient();

const questionsData = [
  { question: 'Bagaimana perasaan Anda hari ini?', options: JSON.stringify(['Sangat Bahagia', 'Bahagia', 'Netral', 'Sedih', 'Sangat Sedih']) },
  { question: 'Seberapa sering Anda merasa cemas dalam seminggu terakhir?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda merasa sulit tidur belakangan ini?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda merasa stres belakangan ini?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda merasa kurang energi untuk menjalani aktivitas sehari-hari?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Seberapa sering Anda merasa cemas atau khawatir tentang masa depan?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda merasa terisolasi atau sendirian?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda sering merasa lelah meskipun sudah cukup tidur?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda merasa sulit untuk berkonsentrasi?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda merasa tidak termotivasi untuk mencapai tujuan Anda?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda merasa takut atau cemas tanpa alasan yang jelas?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda merasa bahwa hidup Anda tidak memiliki arah atau tujuan?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda merasa mudah marah atau tersinggung?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda merasa tidak dapat mengendalikan perasaan Anda?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda merasa tertekan dengan pekerjaan atau studi Anda?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda merasa cemas atau khawatir tentang kesehatan Anda?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda merasa kesulitan untuk membicarakan perasaan Anda dengan orang lain?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda merasa tidak bisa tidur nyenyak?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda merasa ingin menghindari aktivitas sosial atau berkumpul dengan teman-teman?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) },
  { question: 'Apakah Anda merasa kesulitan untuk menikmati hal-hal yang dulu Anda sukai?', options: JSON.stringify(['Tidak Pernah', 'Kadang-kadang', 'Netral', 'Sering', 'Selalu']) }
];

async function seedQuestions() {
  try {
    for (const data of questionsData) {
      await prismaClient.question.create({
        data: data,
      });
    }
    console.log('Pertanyaan berhasil ditambahkan');
  } catch (error) {
    console.error('Error menambahkan pertanyaan:', error);
  } finally {
    await prismaClient.$disconnect();
  }
}

seedQuestions();
