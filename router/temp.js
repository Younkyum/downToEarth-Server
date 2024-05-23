const { getAllRecords } = require(`../controller/recordsController`);
const { getAllChallenges } = require(`../controller/challengesController`);
const express = require("express");
const router = express.Router();

router.route("/records")
.get(getAllRecords);

router.route("/challenges")
.get(getAllChallenges);

module.exports = router;