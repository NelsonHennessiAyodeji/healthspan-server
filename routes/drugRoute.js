const express = require("express");
const router = express.Router();
const { getAllDrugs, createDrug } = require("../controllers/drugController");

router.route("/").get(getAllDrugs).post(createDrug);

module.exports = router;
