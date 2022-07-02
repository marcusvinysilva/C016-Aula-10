const paletasService = require('../services/paletas.service');
const mongoose = require('mongoose');

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

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido' });
  }

  const paleta = await paletasService.findByIdPaleta(id);

  if (!paleta) {
    return res.status(204);
  }

  res.send(paleta);
};

const createPaleta = async (req, res) => {
  const paleta = req.body;

  if (
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    return res.status(400).send({
      message:
        'Você não preencheu todos os dados para adicionar uma nova paleta ao cardápio!',
    });
  }

  const newPaleta = await paletasService.createPaleta(paleta);

  res.status(201).send(newPaleta);
};

const updatePaleta = async (req, res) => {
  const id = req.params.id;
  const editPaleta = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido' });
  }

  const paleta = await paletasService.findByIdPaleta(id);

  if (!paleta) {
    return res.status(204);
  }

  if (
    !editPaleta ||
    !editPaleta.sabor ||
    !editPaleta.descricao ||
    !editPaleta.foto ||
    !editPaleta.preco
  ) {
    return res.status(400).send({
      message: 'Você não preencheu todos os dados para editar a paleta!',
    });
  }

  const updatedPaleta = await paletasService.updatePaleta(id, editPaleta);

  res.send(updatedPaleta);
};

const deletePaleta = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido' });
  }

  const paleta = await paletasService.findByIdPaleta(id);

  if (!paleta) {
    return res.status(204);
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
