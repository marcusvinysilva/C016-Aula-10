const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb://localhost:27017/paletas-db';

function connectToDatabase() {
  mongoose
    .connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB conectado!'))
    .catch((error) => {
      console.log(`Erro ao conectar o banco de dados: ${error}`);
    });
}

module.exports = connectToDatabase;
