var storage = storages.create("OPPO商城小铺");


var UA = storage.get("ua");
var mypassword = storage.get("password");
http.__okhttp__.setTimeout(10000);

if(storage.get("ck")!=null){
if(storage.get("ck").indexOf('Op_lpvt_f18367c55fd7569d9000cd9986846577=')!=-1&&storage.get("ck").indexOf('Op_lvt_f18367c55fd7569d9000cd9986846577=')!=-1){
var time1=storage.get("ck").split("Op_lpvt_f18367c55fd7569d9000cd9986846577=")[1].split(';')[0];
var time2=storage.get("ck").split("Op_lvt_f18367c55fd7569d9000cd9986846577=")[1].split(';')[0];
var COOKIE=storage.get("ck").replace(time1,Math.round(new Date().getTime()/1000)).replace(time2,Math.round(new Date().getTime()/1000-10000)+','+Math.round(new Date().getTime()/1000));
}else{
var COOKIE=storage.get("ck");
}
}


var headers= {
     "Host": "hd.oppo.com",
     "Connection": "keep-alive",
     "Accept": "application/json, text/javascript, */*; q=0.01",
     "X-Requested-With": "XMLHttpRequest",
     "User-Agent":UA,
     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
     "Origin": "https://hd.oppo.com",
     "Sec-Fetch-Site": "same-origin",
     "Sec-Fetch-Mode": "cors",
     "Referer": "https://hd.oppo.com/act/m/2021/huantaichongfenhuodo/index.html?shareId=JM211719",
     "Sec-Fetch-Dest": "empty",
     "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
     "Cookie":COOKIE,
        
    };


if (storage.get("[抽奖]欢太宠粉计划") == "true") {
    开始();
}





function 开始() {

        lottery("1616", "1503", "欢太宠粉计划", "", "");


}





function peng(aid) {
    var url = "https://hd.oppo.com/task/list?aid=" + aid;
    ret = http.get(url, {
        headers: headers,
    }).body.json();

}

function login() {
    var temp = http.get('https://hd.oppo.com/user/login', {
        headers: headers,
    }).body.json();

}


function getcount(aid, lid) {
    ret = http.get("https://hd.oppo.com/platform/lottery/getUserLotteryCount?aid=" + aid + "&lid=" + lid, {
        headers: headers,
    }).body.json();
}


function radomsleep() {
    var f = random(3300, 6600) + random(10, 399);
    sleep(f);
}


function lottery(aid, lid, name, sku, spu) {
    if (aid != 815 && lid != 460) {
        report("日志", "--------" + name + "抽奖--------");

        var i = 0;
        while (i < 10) {
            getcount(aid, lid);
            radomsleep()
            sleep(100);
            login();
            sleep(100);
            peng(aid);
            sleep(100);
            r = http.post("https://hd.oppo.com/platform/lottery", {
                "aid": aid,
                "lid": lid,
                "mobile": "",
                "authcode": "",
                "captcha": "",
                "isCheck": 0,
                "source_type": 501,
                "s_channel": "oppo_appstore",
                "sku": sku,
                "spu": spu,

            }, {
                headers: headers,
            }).body.json();
            if (r['msg'] == "提交成功") {
                report("日志", "抽奖结果：" + r['data']['goods_name'])
            } else {
                report("日志", r['msg']);
                break;
            }
        }
    } else {
        report("日志", "--------" + name + "抽奖--------");

        var i = 0;
        while (i < 10) {
            getcount(aid, lid);
            radomsleep()
            sleep(100);
            login();
            sleep(100);
            peng(aid);
            sleep(100);
            r = http.post("https://hd.oppo.com/platform/lottery", {
                "aid": aid,
                "lid": lid,
                "mobile": "",
                "authcode": "",
                "captcha": "",
                "isCheck": 0,
                "source_type": 501,
                "s_channel": "oppo_appstore",
                "sku": sku,
                "spu": spu,
            }, {
                headers: headers,
            }).body.json();
            if (r['data']['goods_name'] == "") {
                report("日志", "抽奖结果：" + r['data']['goods_name'])

                break;
            } else {
                report("日志", "抽奖结果：" + r['data']['goods_name'])

            }
        }



    }


}

function report(X, Y) {
    Y = Y || false;
    events.broadcast.emit("日志", {
        name: X,
        data: Y
    });
}
mainEngine.emit("control", index);