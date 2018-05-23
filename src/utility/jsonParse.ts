export function jsonParse(data) {
    try {
        let jsonData = JSON.parse(data._body);
        if (jsonData.member != undefined || jsonData.wolo9 != undefined) {
            return jsonData;
        } else {
            //回傳有Maximo錯誤碼
            let jsonerror = JSON.parse(data);
            this.alertservice.error('錯誤訊息:' + jsonerror.error + '(error code:' + data.status + ')');
        }
    }
    catch (error) {
        //回傳http錯誤碼
        let jsonerror = JSON.parse(data);
        this.alertservice.error('錯誤訊息:' + jsonerror.error + '(error code:' + data.status + ')');
    }
}