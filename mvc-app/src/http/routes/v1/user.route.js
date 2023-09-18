const express = require('express')
const router = express.Router()

router.get("/", handleGetAllUsers);

router.post("/new", handleCreateNewUser);

router.patch("/update/:id", handleUpdateUser);

router.delete("/delete/:id", handleDeleteUser);

module.exports = router