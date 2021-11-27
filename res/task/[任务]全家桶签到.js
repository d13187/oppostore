
//var storage = storages.create("OPPO商城小铺");

//if(storage.get("[任务]全家桶签到") == "true"){
   auto.waitFor();
    开始();
//}





//1.游戏中心  2.视频  3.钱包 4.我的oppo 5.健康 6.智能家居 7.软件商店  8.主题商店  9.浏览器   10.我的一加
function checkIn(PKG, CODE, appName) {
   toastLog(appName+"签到中"); 
    try {
        app.startActivity({
            action: "VIEW",
            packageName: "com.oppo.usercenter",
            className: "com.platform.usercenter.credits.ui.SignActivity",
            flags: ["activity_single_top"],
            extras: {
                KEY_FROM_PKG: PKG,
                KEY_BUZ_REGION: "CN",
                APP_CODE: CODE,
 
            },
        
        })
        
        sleep(4500);
var isRoot = $shell.isRootAvailable();
if (isRoot) {
	shell("am force-stop com.oppo.usercenter",true);
}else {
    if(id("close").exists()){
    id("close").findOne().click();
    sleep(500);
    back();
}else{
    back();
}
}
    } catch (error) {
        console.error(error);
    }
    sleep(1000)
}


function check(PKG, CODE, appName) {
   toastLog(appName+"签到中"); 
    try {
        app.startActivity({
            action: "View",
            packageName: "com.heytap.usercenter",
            className: "com.platform.usercenter.credits.ui.SignActivity",
            extras: {
                KEY_FROM_PKG: PKG,
                KEY_BUZ_REGION: "CN",
                APP_CODE: CODE,

            },
        
        })
        
        sleep(4500);
    var isRoot = $shell.isRootAvailable();
if (isRoot) {
	shell("am force-stop com.heytap.usercenter",true);
}else {
    if(id("close").exists()){
    id("close").findOne().click();
    sleep(500);
    back();
}else{
    back();
}
}
    } catch (error) {
        console.error(error);
    }
    sleep(1000)
}








function 开始(){
var name = getAppName("com.oppo.usercenter");
if ((name) != null) {
    toastLog("签到渠道-我的oppo");
    sleep(1500);
     //健康
    checkIn("com.heytap.health", "health", "健康");
     //游戏中心
    checkIn("com.nearme.gamecenter", "1001", "游戏中心");
    //我的oppo
    checkIn("com.oppo.usercenter", "0", "我的oppo"); //经常出问题；checkInSmart();
   //智能家居
    checkIn("com.heytap.smarthome", "smarthome", "智能家居");
   //软件商店
    checkIn("com.oppo.market", "1", "软件商店");
    //视频
    checkIn("com.heytap.yoli", "com.heytap.yoli", "视频");
   //音乐
   checkIn("com.heytap.music", "com.heytap.music", "音乐");
  //主题商店
   checkIn("com.heytap.themestore", "com.heytap.themestore", "主题商店");
   //浏览器
   checkIn("com.heytap.browser", "com.heytap.browser", "浏览器");
   //我的一加
   checkIn("com.heytap.vip", "com.heytap.vip", "我的一加");
   //极速视频
   checkIn("com.heytap.ugcvideo.praise", "com.heytap.ugcvideo.praise", "极速视频");
 
  //钱包
  checkIn("com.finshell.wallet", "com.finshell.wallet", "钱包");

    
}


var name = getAppName("com.heytap.usercenter");
if ((name) != null) {
    toastLog("签到渠道-我的realme");
    sleep(1500);
         //健康
    check("com.heytap.health", "health", "健康");
     //游戏中心
    check("com.nearme.gamecenter", "1001", "游戏中心");
    //我的oppo
    check("com.oppo.usercenter", "0", "我的oppo"); //经常出问题；checkInSmart();
   //智能家居
    check("com.heytap.smarthome", "smarthome", "智能家居");
   //软件商店
    check("com.oppo.market", "1", "软件商店");
    //视频
    check("com.heytap.yoli", "com.heytap.yoli", "视频");
   //音乐
   check("com.heytap.music", "com.heytap.music", "音乐");
  //主题商店
   check("com.heytap.themestore", "com.heytap.themestore", "主题商店");
   //浏览器
   check("com.heytap.browser", "com.heytap.browser", "浏览器");
   //我的一加
   check("com.heytap.vip", "com.heytap.vip", "我的一加");
   //极速视频
   check("com.heytap.ugcvideo.praise", "com.heytap.ugcvideo.praise", "极速视频");
 
  //钱包
  check("com.finshell.wallet", "com.finshell.wallet", "钱包");

   
}

//   欢太商城   社区   音乐   浏览器   小布  即刻 

var name = getAppName("com.oppo.store");
if ((name) != null) {
launch("com.oppo.store");
sleep(1000);
id("text_tab").text("我的").waitFor();
sleep(500);
id("text_tab").text("我的").findOne().parent().parent().click();
sleep(500);
id("own_head_sign_in_bg").className("android.widget.LinearLayout").waitFor();
sleep(500);
id("own_head_sign_in_bg").className("android.widget.LinearLayout").findOne().click();
sleep(2000);
className("android.widget.Button").textContains("签到").waitFor();
sleep(500);
className("android.widget.Button").textContains("签到").find().click();
sleep(500);
app.startActivity({
                    action: "VIEW",
                    packageName: "com.oppo.store",
                    className: "com.oppo.store.deeplink.DeepLinkInterpreterActivity",
                    data:"https://store.oppo.com/cn/m/product/index?skuId=20305&utm_medium=ruanjianshangdian&utm_source=share_oppo_appstore&referer=MmZZSlI0SmcrU1Foa2hscGF4UTFGdz09&utm_campaign=sxdaohang",
                });
sleep(1500);
var isRoot = $shell.isRootAvailable();
if (isRoot) {
	shell("am force-stop com.oppo.store",true);
}
}




var name = getAppName("com.oppo.community");
if ((name) != null) {
launch("com.oppo.community");
sleep(500);
id("home_right_top_menu").waitFor();
sleep(500);
id("home_right_top_menu").findOne().click();
sleep(500);
className("android.widget.Button").id("sign_btn").waitFor();
sleep(500);
className("android.widget.Button").id("sign_btn").findOne().click();
sleep(2500);
var isRoot = $shell.isRootAvailable();
if (isRoot) {
	shell("am force-stop com.oppo.community",true);
}
}



var name = getAppName("com.heytap.music");
if ((name) != null) {
launch("com.heytap.music");
sleep(500);
id("tv_tab_title").className("android.widget.TextView").text("我的").waitFor();
sleep(500);
id("tv_tab_title").className("android.widget.TextView").text("我的").findOne().parent().parent().click();
sleep(500);
id("mine_heytap_sign").waitFor();
sleep(500);
id("mine_heytap_sign").findOne().click();
sleep(2500);
var isRoot = $shell.isRootAvailable();
if (isRoot) {
	shell("am force-stop com.heytap.music",true);
}
}



var name = getAppName("com.heytap.browser");
if ((name) != null) {
launch("com.heytap.browser");
sleep(500);
id("profile").waitFor();
sleep(500);
id("profile").findOne().click();
sleep(500);
id("check_in_button").waitFor();
sleep(500);
id("check_in_button").findOne().click();
sleep(2500);
var isRoot = $shell.isRootAvailable();
if (isRoot) {
	shell("am force-stop com.heytap.browser",true);
}
}


var name = getAppName("com.coloros.videoeditor");
if ((name) != null) {
launch("com.coloros.videoeditor");
id("mine_layout").waitFor();
sleep(500);
    id("mine_layout").findOne().click();
    sleep(500);
    id("btn_setting_account_sign").waitFor();
    sleep(500);
    id("btn_setting_account_sign").findOne().click();
    sleep(2500);
    var isRoot = $shell.isRootAvailable();
if (isRoot) {
	shell("am force-stop com.coloros.videoeditor",true);
}
}


var name = getAppName("com.heytap.speechassist");
if ((name) != null) {

launch("com.heytap.speechassist");
sleep(500);
id("surfaceView").waitFor();
    if (id("mine").exists()) {
        id("mine").findOne().click();
        sleep(1000)
        id("button_login_sign").findOne().click();
        sleep(3500);
        back();

    } else {
        back();
        id("mine").waitFor();
        sleep(1000);
        id("mine").findOne().click();
        sleep(1000)
        id("button_login_sign").findOne().click();
        sleep(3500);
        back();
        
    }
    
    var isRoot = $shell.isRootAvailable();
if (isRoot) {
	shell("am force-stop com.heytap.speechassist",true);
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
mainEngine.emit("control",index);












