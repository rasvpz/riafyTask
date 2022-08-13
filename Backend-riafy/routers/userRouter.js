const express = require('express');
const { getSomeData } = require('../controller/userController');
const router = express.Router()



router.route("/searchPost").post(getSomeData)

module.exports = router;