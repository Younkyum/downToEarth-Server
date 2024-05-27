const { searchCurrentChallenges, searchEndChalenges, addChallenge, searchChallengeDetail, searchAllChallenges } = require("../provider/challengesProvider");
const { retrieveRecordList } = require("../provider/recordsProvider");

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
        const searchEndChallengeData = await searchEndChalenges();

        var resultData = []

        for (const challenge of searchEndChallengeData) {
            const tempObject = { challenge: challenge, records: [] };
            const challengeRecordsResult = await retrieveRecordList(challenge.id);
            tempObject.records = challengeRecordsResult;
            resultData.push(tempObject);
            console.log(resultData);
        }

        return res.status(200).json({ data: resultData });
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
        const addChallengeResult = await addChallenge(
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


/** 챌린지 정보 조회 */
module.exports.getChallengeDetails = async(req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        
        const challengeDetailResult = await searchChallengeDetail(id);
        const challengeRecordsResult = await retrieveRecordList(id);
    
        return res.status(200).json({ data: challengeDetailResult, records: challengeRecordsResult });
    } catch (err) {
        console.log(err);
        return res.status(500).send( {
            status: 500,
            message: "Error: Server did not worked wiht expectations."
        })
    }
}

/** Temp */
module.exports.getAllChallenges = async(req, res) => {
    try {
        const challengesResult = await searchAllChallenges();
        return res.status(200).json({ data: challengesResult });
    } catch (err) {
        console.log(err);
        return res.status(500).send( {
            status: 500,
            message: "Error: Server did not worked wiht expectations."
        })
    }
}