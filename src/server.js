const express = require('express')
const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
const app = express()

app.use(express.json())

// montamos router de koders

app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
// todos los recursos y las rutas se escriben en plural

// TODOS SON EL MISMO RECURSO
// router '/koders'
// GET /koders
// POST /koders
// PATCH /koders/:id
// DELETE /koders/:id

// router lo puedo montar en la ruta que quiera
// router se montará /koders
// GET /-> GET /koders
// POST /-> POST /koders

module.exports = app
