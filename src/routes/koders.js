const express = require('express')
const koders = require('../usecases/koders')
const router = express.Router()

// GET /koders
router.get('/', async (request, response) => {
  try {
    const allKoders = await koders.getAll()
    response.json({
      message: 'all koders',
      data: {
        koders: allKoders
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message
    })
  }
})

// try-catch
router.post('/', async (request, response) => {
  try {
    const newKoder = await koders.create(request.body)
    response.json({
      success: true,
      message: 'koder created',
      data: {
        koder: newKoder
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message

    })
  }
})

// DELETE /koders/:id
// PATCH /koders/:id

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const KoderDeleted = await koders.deleteByid(id)
    response.json({
      success: true,
      message: `koder with id ${id} deleted`,
      data: {
        koder: KoderDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderUpdated = await koders.updateByid(id, request.body)
    response.json({
      success: true,
      message: `koder with ${id} updated`,
      data: {
        koderUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})
module.exports = router
