const { createorder } = require('../controllers/ordercontroller')
const express = require('express')
const router = express.Router()
router.route('/order').post(createorder)

module.exports = router