const router = require('express').Router()

router.use('/api', require('./burgRoutes.js'))

module.exports = router