const { registerRecords, retrieveRecords, updateRecord } = require(`../controller/recordsController`);
const express = require("express");
const router = express.Router();

router.route("/add")
.post(registerRecords)

router.route("/")
.get(retrieveRecords)

router.route("/edit")
.post(updateRecord)


module.exports = router;