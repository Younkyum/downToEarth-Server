/** 해당 챌린지 레코드 가져오기 */
module.exports.selectReocrds = async(connection, challengeId) => {
    const selectReocrdsQuery = `
    SELECT * 
    FROM Records
    WHERE challengeId=?;`
    const [selectReocrdsRow] = connection.query(selectReocrdsQuery, [challengeId]);
    return selectReocrdsRow;
}