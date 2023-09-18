const express = require('express')
const router = express.Router()

router.post("/new", handleNewPayment);

router.get("/status/:id", handleGetUser);

// router.post("/history", handleGetUser);

module.exports = router