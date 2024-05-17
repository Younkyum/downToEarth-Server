const { registerRecord, retrieveRecordList, updateRecordInfo} = require("../provider/recordsProvider");

/*
 * API No. 2.B 
 * API Name : 챌린지 레코드 추가 
 * [POST] /record
*/

module.exports.registerRecords = async (req, res) => {
    try{
        const { challengeId } = req.params;
        const { value } = req.body;

        if(!challengeId) {
            console.log("This is not proper challengeId");
        } else {
            const registerResponse = await this.registerRecord(
                challengeId,
                value
            );
            console.log(registerResponse);
            return res.send(registerResponse);
        }
    } catch (err) {
        console.log("Error", err);
        // 오류 메세지 반환
        return res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};


/*
 * API No. 3.A 
 * API Name : 챌린지 레코드 조회 
 * [GET] /records
*/

module.exports.retrieveRecords = async (req, res) => {
    try{
        const { challengeId } = req.params;
        const { recordId, value, createdAt } = req.body;
        if(!challengeId) {
            console.log("This is not proper challengeId");
        } else {
            const retrieveRecordResponse = await this.retrieveRecordList(
                challengeId,
                recordId,
                value,
                createdAt
            );
            console.log(retrieveRecordResponse);
            return res.send(retrieveRecordResponse);
        }
    } catch (err) {
        console.log("Error", err);
        // 오류 메세지 반환
        return res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};





/*
 * API No. 3.B
 * API Name : 챌린지 레코드 수정 
 * [POST] /record
*/

module.exports.updateRecord = async (req, res) => {
    try {
        const { challengeId } = req.params;
        const { recordId, value } = req.body;

        if (!challengeId && !recordId){
            res.send("This is not proper ids");
            res.redirect("/");
        } else {
            const updateRecordInfoResponse = await this.updateRecordInfo(
                challengeId,
                recordId,
                value
            );
            console.log(updateRecordInfoResponse);
            return res.send(updateRecordInfoResponse);
        }
    } catch (err) {
        console.log("Error", err);
    }
}