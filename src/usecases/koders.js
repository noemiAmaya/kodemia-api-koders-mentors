const Koder = require('../models/koders')

// los casos de uso son las acciones que puede ejercer un usuario en el sistema

function getAll () {
  return Koder.find()
}

function create (koderData) {
  return Koder.create(koderData)
}

function deleteByid (id) {
  return Koder.findByIdAndRemove(id)
}

function updateByid (id, newKoderData) {
  return Koder.findByIdAndUpdate(id, newKoderData)
}

module.exports = {
  getAll,
  create,
  deleteByid,
  updateByid
}

// en la ruta
// const koders = require('... koders')
// koders.getAll()
