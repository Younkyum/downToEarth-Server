/** 해당 챌린지 레코드 가져오기 */
module.exports.selectReocrds = async(connection, challengeId) => {
    const selectReocrdsQuery = `
    SELECT * 
    FROM Records
    WHERE challengeId=?
    ORDER BY createdAt ASC;`
    const [selectReocrdsRow] = await connection.query(selectReocrdsQuery, [challengeId]);
    return selectReocrdsRow;
}


/** 해당 챌린지에 정보 추가하기 */
module.exports.insertReocord = async(connection, challengeId, value) => {
    const insertReocordQuery = `
    INSERT INTO Records (value, challengeId)
    VALUES (?, ?);`
    const [insertReocordRow] = await connection.query(insertReocordQuery, [value, challengeId]);
    return insertReocordRow;
}