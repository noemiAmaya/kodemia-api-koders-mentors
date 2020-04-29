const mongoose = require('mongoose')
const DB_USER = 'jazzamaya'
const DB_PASSWORD = 'Njma_132123'
const DB_HOST = 'kodemia-dix0w.mongodb.net'
const DB_NAME = 'kodemiaa'
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect () {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
}

module.exports = {
  connect
}
