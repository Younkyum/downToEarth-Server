const pool = require('../config/database');
const { insertRecord, selectRecords, updateRecord, selectAllRecords } = require('../dao/recordsDao');

/** 기록 하나 추가 */
exports.registerRecord = async(challengeId, value) => {
    const connection = await pool.getConnection(async conn => conn);    
    const registerRecordResult = await insertRecord(connection, challengeId, value);
    connection.release();
    return registerRecordResult;
}


/** 기록 리스트 읽어들이기 */
exports.retrieveRecordList = async(challengeId) => {
    const connection = await pool.getConnection(async conn => conn);
    const recordList = await selectRecords(connection, challengeId);
    connection.release();
    return recordList;
}

/** 기록 하나 수정 */
exports.updateRecordInfo = async(recordId, value) => {
    const connection = await pool.getConnection(async conn => conn);
    const updateRecordResult = await updateRecord(connection, recordId, value);
    connection.release();
    return updateRecordResult;
}

/** TEMP */
module.exports.searchAllRecords = async() => {
    const connection = await pool.getConnection(async (conn) => (conn));
    const searchAllRecordsResult = selectAllRecords(connection);
    connection.release();
    return searchAllRecordsResult;
}