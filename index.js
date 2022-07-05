const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/database/database');
const paletasRoute = require('./src/routes/paletas.route');
const swaggerRoute = require('./src/routes/swagger.route');

const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase();

app.use('/paletas', paletasRoute);
app.use('/api', swaggerRoute);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
