const Paleta = require('../models/Paleta');

const findAllPaletas = async () => {
  const allPaletas = await Paleta.find();
  return allPaletas;
};

const findByIdPaleta = async (idParam) => {
  return await Paleta.findById(idParam);
};

const createPaleta = async (newPaleta) => await Paleta.create(newPaleta);

const updatePaleta = async (idParam, editPaleta) => {
  return await Paleta.findByIdAndUpdate(idParam, editPaleta).setOptions({
    returnOriginal: false,
  });
};

const deletePaleta = async (idParam) => await Paleta.findByIdAndDelete(idParam);

module.exports = {
  findAllPaletas,
  findByIdPaleta,
  createPaleta,
  updatePaleta,
  deletePaleta,
};
