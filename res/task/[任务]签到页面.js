



var UA = 



var COOKIE=


var headers= {
    "Host": "msec.opposhop.cn",
     "Connection": "keep-alive",
     "Accept": "application/json, text/javascript, */*; q=0.01",
     "X-Requested-With": "XMLHttpRequest",
     "User-Agent":UA,
     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
     "Sec-Fetch-Site": "same-origin",
     "Sec-Fetch-Mode": "cors",
     "Sec-Fetch-Dest": "empty",
     "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
     "Cookie":COOKIE,
        
    };
    
var header={
     "Host": "store.oppo.com",
     "Connection": "keep-alive",
     "Accept": "application/json, text/javascript, */*; q=0.01",
     "X-Requested-With": "XMLHttpRequest",
     "User-Agent":UA,
     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
     "Sec-Fetch-Site": "same-origin",
     "Sec-Fetch-Mode": "cors",
     "Sec-Fetch-Dest": "empty",
     "Referer": "https://store.oppo.com/cn/app/taskCenter/index",
     "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
     "Cookie":COOKIE,
        
    };



//看这里
//批量修改  report("日志", 改为  console.log(
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
HeyTaptask();



function peng(aid) {
    var url = "https://hd.oppo.com/task/list?aid=" + aid;
    ret = http.get(url, {
      headers:{
     "Host": "hd.oppo.com",
     "Connection": "keep-alive",
     "Accept": "application/json, text/javascript, */*; q=0.01",
     "X-Requested-With": "XMLHttpRequest",
     "User-Agent":UA,
     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
     "Sec-Fetch-Site": "same-origin",
     "Sec-Fetch-Mode": "cors",
     "Sec-Fetch-Dest": "empty",
     "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
     "Cookie":COOKIE,
        
    }
    });

}

function HeyTapsign(xx, yy, zz) {


    var url = "https://store.oppo.com/cn/oapi/credits/web/report/immediately";
    r = http.post(url, {
        "amount": xx,
        "gift": yy,
        "type": zz,
    }, {
        headers: header,
    }).body.json();
    var a = r.code;
    if (a == 200) {
        report("日志","[签到成功]:" + r['data']['message'])

    } else {
        report("日志","[签到异常]:" + r['errorMessage'])
    }




}


function HeyTapsigna(xx) {


    var url = "https://store.oppo.com/cn/oapi/credits/web/report/immediately";
    r = http.post(url, {
        "amount": xx,
    }, {
        headers: header,
    }).body.json();
    var a = r.code;
    if (a == 200) {
        report("日志","[签到成功]:" + r['data']['message'])

    } else {
        report("日志","[签到异常]:" + r['errorMessage'])
    }




}





function HeyTaptask() {



    var url = "https://hd.oppo.com/user/login";
    ret = http.get(url, {
        headers:{
     "Host": "hd.oppo.com",
     "Connection": "keep-alive",
     "Accept": "application/json, text/javascript, */*; q=0.01",
     "X-Requested-With": "XMLHttpRequest",
     "User-Agent":UA,
     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
     "Sec-Fetch-Site": "same-origin",
     "Sec-Fetch-Mode": "cors",
     "Sec-Fetch-Dest": "empty",
     "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
     "Cookie":COOKIE,
        
    }
    });


    sleep(2000);

    var urla = "https://store.oppo.com/cn/oapi/users/web/member/check?unpaid=0&cartNumber=0";
    temp = http.get(urla, {
        headers: header,
    }).body.json();
    if (temp['code'] == 200) {

        report("日志","[登录帐号]:"+temp['data']['name']);
    } else {
        report("日志",temp['msg']);
    }






    //获取任务和任务状态


    sleep(2000);


    ret = http.get("https://store.oppo.com/cn/oapi/credits/web/credits/show", {
        headers:{
     "Host": "store.oppo.com",
     "Connection": "keep-alive",
     "Accept": "application/json, text/javascript, */*; q=0.01",
     "X-Requested-With": "XMLHttpRequest",
     "User-Agent":UA,
     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
     "Sec-Fetch-Site": "same-origin",
     "Sec-Fetch-Mode": "cors",
     "Sec-Fetch-Dest": "empty",
     "Referer": "https://store.oppo.com/cn/app/taskCenter/index",
     "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
     "Cookie":COOKIE,
        
    }
    }).body.json();
    log(ret);
    var usercredit = ret.data.userCredits;
    var credit = ret.data.userReportInfoForm.reportDays;
    report("日志","[签到]" + credit + "天");
    report("日志","[积分]:"+ usercredit);

    for (var i = 0; i <= 6; i++) {
        if (ret['data']['userReportInfoForm']['gifts'][i]['today'] == true) {
            var signcredit = ret['data']['userReportInfoForm']['gifts'][i]['credits'];
            var type = ret['data']['userReportInfoForm']['gifts'][i]['type'];
            var gift = ret['data']['userReportInfoForm']['gifts'][i]['gift'];
            if(gift!=""){
            HeyTapsign(signcredit, gift, type);
            }else{
            HeyTapsigna(signcredit)
            }
        }
    }


    
        //-------------------------------------------------------------------------------

        report("日志","---------欢太商城签到页面浏览任务----------");
        sleep(2000);
        //浏览商品
        var temp = http.get('https://msec.opposhop.cn/goods/v1/info/sku?skuId=3882&secKillRoundId=3056&cfId=', {
            "headers": headers,
        }).body.string();
        report("日志","浏览任务中");
        sleep(2000);
        var temp = http.get('https://msec.opposhop.cn/goods/v1/info/sku?skuId=3753&secKillRoundId=3056&cfId=', {
            "headers": headers,
        }).body.string();
        report("日志","浏览任务中");
        sleep(2000);
        var temp = http.get('https://msec.opposhop.cn/goods/v1/info/sku?skuId=3905&secKillRoundId=3056&cfId=', {
            "headers": headers,
        }).body.string();
        report("日志","浏览任务中");
        sleep(2000);
        var temp = http.get('https://msec.opposhop.cn/goods/v1/info/sku?skuId=4740&secKillRoundId=3056&cfId=', {
            "headers": headers,
        }).body.string();
        report("日志","浏览任务中");
        sleep(2000);
        var temp = http.get('https://msec.opposhop.cn/goods/v1/info/sku?skuId=20449&secKillRoundId=3056&cfId=', {
            "headers": headers,
        }).body.string();
        report("日志","浏览任务中");
        sleep(2000);
        var temp = http.get('https://msec.opposhop.cn/goods/v1/info/sku?skuId=21459&secKillRoundId=3056&cfId=', {
            "headers": headers,
        }).body.string();
        report("日志","浏览任务中");
        sleep(2000);
        var temp = http.get('https://msec.opposhop.cn/goods/v1/info/sku?skuId=3471&secKillRoundId=3056&cfId=', {
            "headers": headers,
        }).body.string();
        report("日志","浏览任务中");
        sleep(2000);
        var temp = http.get('https://msec.opposhop.cn/goods/v1/info/sku?skuId=20417&secKillRoundId=3056&cfId=', {
            "headers": headers,
        }).body.string();
        report("日志","浏览任务中");
        sleep(2000);
        var temp = http.get('https://msec.opposhop.cn/goods/v1/info/sku?skuId=20193&secKillRoundId=3056&cfId=', {
            "headers": headers,
        }).body.string();
        report("日志","浏览任务中");
        sleep(2000);
        var temp = http.get('https://msec.opposhop.cn/goods/v1/info/sku?skuId=4108&secKillRoundId=3056&cfId=', {
            "headers": headers,
        }).body.string();
        report("日志","浏览任务中");

        //-------------------------------------------------------------------------------
        report("日志","----------领取浏览任务奖励--------");
        sleep(2000);
        //领取20积分奖励
        var url = "https://store.oppo.com/cn/oapi/credits/web/credits/cashingCredits";
        r = http.post(url, {
            "marking": "daily_viewgoods",
            "type": "2",
            "amount": "20",

        }, {
            headers: header,

        }).body.json();
        var b = r.code;
        var z = r.errorMessage;
        if (b == "200") {
            report("日志","成功领取20积分");

        } else {
            report("日志","[操作异常]" + z)
        };






        //-------------------------------------------------------------------------------

        report("日志","--------欢太商城签到页面分享微信任务--------");
        //分享到微信
        for (var a = 1; a <= 4; a++) {
            sleep(2000);
            var temp = http.get('https://msec.opposhop.cn/users/vi/creditsTask/pushTask?marking=daily_sharegoods', {
                "headers": headers,
            }).body.string();
            report("日志","分享任务中");



        };

        //-------------------------------------------------------------------------------

        report("日志","--------领取分享微信任务奖励--------");

        sleep(2000);
        //领取20积分奖励
        var url = "https://store.oppo.com/cn/oapi/credits/web/credits/cashingCredits";
        r = http.post(url, {
            "marking": "daily_sharegoods",
            "type": "2",
            "amount": "20",

        }, {
            headers: header,
        }).body.json();
        var b = r.code;
        var z = r.errorMessage;
        if (b == "200") {
            report("日志","成功领取20积分");

        } else {
            report("日志","[操作异常]" + z)
        };


    


}


