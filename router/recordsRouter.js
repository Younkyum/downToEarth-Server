const { registerRecords, retrieveRecords, updateRecord, getAllRecords } = require(`../controller/recordsController`);
const express = require("express");
const router = express.Router();

router.route("/tempRecords")
.get(getAllRecords);

router.route("/:challengeId/records/add")
.post(registerRecords)

router.route("/:challengeId/records")
.get(retrieveRecords)

router.route("/:challengeId/records/edit")
.post(updateRecord)

module.exports = router;