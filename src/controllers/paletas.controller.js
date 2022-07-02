const paletasService = require('../services/paletas.service');

const findAllPaletas = async (req, res) => {
  const allPaletas = await paletasService.findAllPaletas();

  if (allPaletas.length == 0) {
    return res
      .status(206)
      .send({ message: 'Não existe nenhuma paleta cadastrada!' });
  }

  res.send(allPaletas);
};

const findByIdPaleta = async (req, res) => {
  const id = req.params.id;

  const paleta = await paletasService.findByIdPaleta(id);

  if (!paleta) {
    return res.status(206).send({message: 'Paleta não encontrada com esse id!'});
  }

  res.send(paleta);
};

const createPaleta = async (req, res) => {
  const paleta = req.body;

  const newPaleta = await paletasService.createPaleta(paleta);

  res.status(201).send(newPaleta);
};

const updatePaleta = async (req, res) => {
  const id = req.params.id;
  const editPaleta = req.body;

  const paleta = await paletasService.findByIdPaleta(id);

  if (!paleta) {
    return res.status(206).send({message: 'Paleta não encontrada com esse id!'});
  }

  const updatedPaleta = await paletasService.updatePaleta(id, editPaleta);

  res.send(updatedPaleta);
};

const deletePaleta = async (req, res) => {
  const id = req.params.id;
  const paleta = await paletasService.findByIdPaleta(id);

  if (!paleta) {
    return res.status(206).send({message: 'Paleta não encontrada com esse id!'});
  }

  await paletasService.deletePaleta(id);

  res.send({ message: 'Paleta deletada!' });
};

module.exports = {
  findAllPaletas,
  findByIdPaleta,
  createPaleta,
  updatePaleta,
  deletePaleta,
};
