const { getCurrentChallenges, getEndChallenges, postChallenge } = require(`../controller/challengesController`);
const express = require("express");
const router = express.Router();

router.route("/today")
.get(getCurrentChallenges)

router.route("/end")
.get(getEndChallenges)

router.route("/add")
.post(postChallenge)


module.exports = router;