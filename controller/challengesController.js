const { searchCurrentChallenges, searchEndChallenges, addChallenge, addChallenge } = require("../provider/challengesProvider");

/** 현재 진행중인 챌린지 데이터 전달 */
module.exports.getCurrentChallenges = async(req, res) => {
    try {
        const searchCurrentChallengeData = await searchCurrentChallenges();

        return res.status(200).json({ data: searchCurrentChallengeData });
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            status: 500,
            message: "Error: Server did not worked wiht expectations."
        });
    }
}

/** 마무리된 챌린지 데이터 전달 */
module.exports.getEndChallenges = async(req, res) => {
    try {
        const searchEndChallengeData = await searchEndChallenges();

        return res.status(200).json({ data: searchEndChallengeData });
    } catch (err) {
        console.log(err);
        return res.status(500).send( {
            status: 500,
            message: "Error: Server did not worked wiht expectations."
        })
    }
}


/** 챌린지 추가 */
module.exports.postChallenge = async(req, res) => {
    try {
        const { 
            title, 
            targetCount, 
            countUnit, 
            endAt, 
            notificationPlan } = req.body;
        const addChallenge = await addChallenge(
            title, 
            targetCount, 
            countUnit, 
            endAt, 
            notificationPlan);
        
        return res.status(200).json({ isSuccess: true });
    } catch (err) {
        console.log(err);
        return res.status(500).send( {
            status: 500,
            message: "Error: Server did not worked wiht expectations."
        })
    }
}