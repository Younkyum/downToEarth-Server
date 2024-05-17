/** 현재 진행 중인 챌린지를 받아오는 쿼리 */
module.exports.selectCurrentChallenges = async(connection) => {
    const selectCurrentChallengesQuery = `
    SELECT *
    FROM Challenges
    WHERE endAt >= CURDATE();`
    const [selectCurrentChallengesRow] = await connection.query(selectCurrentChallengesQuery);
    return selectCurrentChallengesRow;
}

/** 마무리된 챌린지를 받아오는 쿼리*/
module.exports.selectEndChallenges = async(connection) => {
    const selectEndChallengesQuery = `
    SELECT *
    FROM Challenges
    WHERE endDate < CURDATE();`
    const [selectEndChallengesRow] = await connection.query(selectEndChallengesQuery);
    return selectEndChallengesRow;
}


/** 챌린지 추가하기 */
module.exports.insertChallenge = async(connection, title, targetCount, countUnit, endAt, notificationPlan) => {
    const insertChallengeQuery = `
    INSERT INTO Challenges (title, targetCount, countUnit, endAt, notificationPlan)
    VALUES (?, ?, ?, ?, ?);`
    const [insertChallengeRow] = await connection.query(insertChallengeQuery);
    return insertChallengeRow;
}