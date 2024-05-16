/** 현재 진행 중인 챌린지를 받아오는 쿼리 */
module.exports.selectCurrentChallenges = async(connection) => {
    const selectCurrentChallengesQuery = `
    SELECT id, title, targetCount, currentCount, endAt
    FROM Challenges
    WHERE targetCount != currentCount;`
    const [selectCurrentChallengesRow] = await connection.query(selectCurrentChallengesQuery);
    return selectCurrentChallengesRow;
}

/**  */