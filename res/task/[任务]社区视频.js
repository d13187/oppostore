var storage = storages.create("OPPO商城小铺");

var COOKIE = storage.get("ck");
var UA = storage.get("ua");
var mypassword = storage.get("password");
http.__okhttp__.setTimeout(10000);
if(storage.get("ck")!=null){
if(COOKIE.indexOf('TOKENSID')!=-1){
    var token=";token"+COOKIE.split('TOKENSID')[1].split(';')[0];
}else{
    var token=COOKIE;
}

}



if(storage.get("[任务]社区视频") == "true"){
    开始();
}
function 开始(){
    videotask();
}






function videotask() {
    
    var time = new Date().getTime();

    report("日志","--------OPPO社区视频任务--------");

    for (var v = 0; v < 10; v++) {
        var s = random(1500, 2000);
        var q = random(10, 99);
        var f = Number(s) + Number(q);

        var url = "https://i-api.oppo.cn/java/task/api/browse/browseFinish";
        ret = http.post(url, {
            "systemId": "520",
            "_t": time,
            "_sign": ""
        }, {
            headers: {

                "Content-Type": "application/x-www-form-urlencoded",
                "Host": "i-api.oppo.cn",
                "Connection": "Keep-Alive",
                "User-Agent": UA,
                "TAP-GSLB": "0,0",
                "Cookie": token
            }
        }).body.json();
        if (ret['code'] == 200) {
            report("日志","观看视频中");
        } else {
            report("日志",ret['msg']);
        }
        sleep(2000);
    }

    sleep(2000);
    var url = "https://www.oppo.cn/java/task/api/browse/awardBrowseTask";
    ret = http.post(url, {
        "idList": "520"
    }, {
        headers: {
            "Host": "www.oppo.cn",
            "Connection": "keep-alive",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache",
            "User-Agent": UA,
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Accept": "*/*",
            "Origin": "https://hybrid.oppo.cn",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://hybrid.oppo.cn/readReward.html?customNightMode=true",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "Cookie": token,
        }

    }).body.json();
    if (ret['code'] == 200) {
        report("日志","观看任务完成");
        sleep(3000);
    } else {
        report("日志","异常操作");
    }

}







function report(X, Y) {
    Y = Y || false;
    events.broadcast.emit("日志", {
        name: X,
        data: Y
    });
}
mainEngine.emit("control",index);











