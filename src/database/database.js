const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB conectado!'))
    .catch((error) => {
      console.log(`Erro ao conectar o banco de dados: ${error}`);
    });
}

module.exports = connectToDatabase;
