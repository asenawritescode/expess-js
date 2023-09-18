const express = require('express')
const router = express.Router()

const userRouter = require('./user.route')
const paymentRouter = require('./payment.route')

router.use('/user/', userRouter)

router.use('/payment/', paymentRouter)

module.exports = router;