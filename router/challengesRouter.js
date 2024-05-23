const { getCurrentChallenges, getEndChallenges, postChallenge, getChallengeDetails, getAllChallenges } = require(`../controller/challengesController`);
const express = require("express");
const router = express.Router();

router.route("/today")
.get(getCurrentChallenges);

router.route("/end")
.get(getEndChallenges);

router.route("/add")
.post(postChallenge);

router.route("/tempChallenges")
.get(getAllChallenges);

router.route("/:id")
.get(getChallengeDetails);

module.exports = router;