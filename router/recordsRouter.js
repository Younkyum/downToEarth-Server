const { registerRecords, retrieveRecords, updateRecord } = require(`../controller/recordsController`);
const express = require("express");
const router = express.Router();

router.route("/:challengeId/records/add")
.post(registerRecords)

router.route("/:challengeId/records")
.get(retrieveRecords)

router.route("/:challengeId/records/edit")
.post(updateRecord)


module.exports = router;