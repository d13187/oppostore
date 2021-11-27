
var UA = 
var COOKIE=

    
var headers = {
    "Host": "store.oppo.com",
    "Connection": "keep-alive",
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "X-Requested-With": "XMLHttpRequest",
    "User-Agent": UA,
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://hd.oppo.com",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://store.oppo.com/cn/app/cashRedEnvelope?activityId=1&us=qiandao&um=task",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "Cookie": COOKIE,

};


//感谢支持
auto.waitFor()
app.startActivity({
                    action: "VIEW",
                    packageName: "com.oppo.store",
                    className: "com.oppo.store.deeplink.DeepLinkInterpreterActivity",
                    data:"https://store.oppo.com/cn/m/product/index?skuId=20305&utm_medium=ruanjianshangdian&utm_source=share_oppo_appstore&referer=MmZZSlI0SmcrU1Foa2hscGF4UTFGdz09&utm_campaign=sxdaohang",
                });
sleep(1500);



    开始();









function 开始(){
var b = "";
        var c = String(b).split(';');

        if (b == null) {
            toast("请提交助力帐号的ID")
        } else {
            for (var t = 0; t < 3; t++) {
                if (c[t] != null) {
                    var url = "https://store.oppo.com/cn/oapi/omp-web/web/dailyCash/inviteePage?activityId=1&shareUserId=" + c[t];
                    ret = http.get(url, {
                        headers:headers,
                    }).body.json();
                    if (ret['code'] == 200) {
                        console.log("助力成功")
                    }
                    if (ret['code'] == 1000001) {
                    console.log(ret['errorMessage'])
                    }

                }
                sleep(2000);
            }
        }
        
}


