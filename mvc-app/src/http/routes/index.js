const express = require('express')
const router = express.Router()

const apiV1 = require('./v1')
// const apiV2 = require('./v2')

router.use('/api/v1/', apiV1)
// router.use('/api/v2/', apiV2)


module.exports = router;