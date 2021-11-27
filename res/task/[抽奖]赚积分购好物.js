
var UA = 

var COOKIE=


var headers = {
    "Host": "hd.oppo.com",
    "Connection": "keep-alive",
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "X-Requested-With": "XMLHttpRequest",
    "User-Agent": UA,
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://hd.oppo.com",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://hd.oppo.com/act/m/2021/jifenzhuanpan/index.html?us=gerenzhongxin&um=hudongleyuan&uc=yingjifen",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "Cookie": COOKIE,

};







function 开始() {

    lottery("1418", "1307", "赚积分购好物", "", "");


}





//感谢支持
auto.waitFor()
app.startActivity({
                    action: "VIEW",
                    packageName: "com.oppo.store",
                    className: "com.oppo.store.deeplink.DeepLinkInterpreterActivity",
                    data:"https://store.oppo.com/cn/m/product/index?skuId=20305&utm_medium=ruanjianshangdian&utm_source=share_oppo_appstore&referer=MmZZSlI0SmcrU1Foa2hscGF4UTFGdz09&utm_campaign=sxdaohang",
                });
sleep(1500);


console.show();

 开始();




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
        console.log( "--------" + name + "抽奖--------");

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
               console.log( "抽奖结果：" + r['data']['goods_name'])
            } else {
              console.log(r['msg']);
                break;
            }
        }
    } else {
        console.log( "--------" + name + "抽奖--------");

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
             console.log("抽奖结果：" + r['data']['goods_name'])

                break;
            } else {
                console.log( "抽奖结果：" + r['data']['goods_name'])

            }
        }



    }


}
