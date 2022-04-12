const express = require("express");
const router = express.Router();

const calculateBMI = require("../controllers/bmiController");

router.post("/calcBMI", calculateBMI.BMIHealth);

module.exports = router;
