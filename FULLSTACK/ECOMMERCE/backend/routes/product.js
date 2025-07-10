const { getproduct, getsingleproduct } = require('../controllers/productcontroller')
const express = require('express')
const router=express.Router()

router.route('/product').get(getproduct)
router.route('/product/:id').get(getsingleproduct)

module.exports = router