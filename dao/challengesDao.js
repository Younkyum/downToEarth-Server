/** 현재 진행 중인 챌린지를 받아오는 쿼리 */
module.exports.selectCurrentChallenges = async(connection) => {
    const selectCurrentChallengesQuery = `
    SELECT *
    FROM Challenges
    WHERE endAt >= CURDATE()
    AND targetCount > currentCount;`;
    const [selectCurrentChallengesRow] = await connection.query(selectCurrentChallengesQuery);
    return selectCurrentChallengesRow;
}

/** 마무리된 챌린지를 받아오는 쿼리*/
module.exports.selectEndChallenges = async(connection) => {
    const selectEndChallengesQuery = `
    SELECT *
    FROM Challenges
    WHERE endAt < CURDATE()
    OR targetCount <= currentCount;`;
    const [selectEndChallengesRow] = await connection.query(selectEndChallengesQuery);
    return selectEndChallengesRow;
}

/** 챌린지 추가하기 */
module.exports.insertChallenge = async(connection, title, targetCount, countUnit, endAt, notificationPlan) => {
    const insertChallengeQuery = `
    INSERT INTO Challenges (title, targetCount, countUnit, endAt, notificationPlan)
    VALUES (?, ?, ?, ?, ?);`;
    const [insertChallengeRow] = await connection.query(insertChallengeQuery, [title, targetCount, countUnit, endAt, notificationPlan]);
    return insertChallengeRow;
}

/** 특정 챌린지 정보 확인 */
module.exports.selelctChallengeById = async(connection, challengeId) => {
    const selelctChallengeByIdQuery = `
    SELECT *
    FROM Challenges
    WHERE id=?;`;
    const [selectChallengesByIdRow] = await connection.query(selelctChallengeByIdQuery, [challengeId]);
    return selectChallengesByIdRow;
}

/** 특정 챌린지 count 추가 */
module.exports.updateChallnegeCount = async(connection, challengeId) => {
    const updateChallnegeCountQuery = `
    UPDATE Challenges
    SET currentCount = Challenges.currentCount + 1
    WHERE id = ?;`;
    const [updateChallengeCountRow] = await connection.query(updateChallnegeCountQuery, [challengeId]);
    return updateChallengeCountRow;
}