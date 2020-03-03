
const router = require('express').Router()
const burger = require('../controllers/burgControllers.js')

//GET all burgers
router.get('/burgers', (req, res) => {
    burger.getBurgs(burgers => {
      res.json(burgers)
  })
})

//POST a new burger
router.post('/burgers', (req, res) => {
  burger.getOneBurg(req.body, () => {
    res.sendStatus(200)
  })
})

//PUT(update) a burger
router.put('/burgers/:id', (req, res) => {
  burger.updateBurg({devoured: true}, req.params.id, () => {
    res.sendStatus(200)
  })
})

module.exports = router