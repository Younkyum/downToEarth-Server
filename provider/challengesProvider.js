const { selectCurrentChallenges, selectEndChallenges, insertChallenge, selelctChallengeById } = require("../dao/challengesDao");
const pool = require("../config/database");

/** 현재 진행 중인 챌린지를 받아옴 */
module.exports.searchCurrentChallenges = async() => {
    const connection = await pool.getConnection(async (conn) => (conn));
    const searchCurrentChallengesResult = selectCurrentChallenges(connection);
    connection.release();
    return searchCurrentChallengesResult;
}

/** 마무리된 챌린지를 받아옴 */
module.exports.searchEndChalenges = async() => {
    const connection = await pool.getConnection(async (conn) => (conn));
    const searchEndChalengesResult = selectEndChallenges(connection);
    connection.release();
    return searchEndChalengesResult;
}

/** 챌린지를 추가함 */
module.exports.addChallenge = async(title, targetCount, countUnit, endAt, notificationPlan) => {
    const connection = await pool.getConnection(async (conn) => (conn));
    const addChallengeResult = insertChallenge(connection, title, targetCount, countUnit, endAt, notificationPlan);
    connection.release();
    return addChallengeResult;
}

/** 챌린지 하나의 데이터 가져오기 */
module.exports.searchChallengeDetail = async(challengeId) => {
    const connection = await pool.getConnection(async (conn) => (conn));
    const searchChallengeDetailResult = selelctChallengeById(connection, challengeId);
    connection.release();
    return searchChallengeDetailResult;
}