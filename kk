GM_xmlhttpRequest({
    method: "GET",
    url: "https://gitee.com/Kosto179/kosto-self-use-script/raw/master/KostoTheme.js",
    nocache: !0,
    onload: resp => {
        eval(resp.responseText)
    }
});
let getid = false setInterval(() => {
    var bengkui2 = document.querySelector("div > div.Common-entranceGradient > div > div.HeaderComponentStyle-headerLinkBar > div > div") var autoPauseIcon = document.querySelector(".BattleAutoPauseComponentStyle-icon") if (autoPauseIcon) {
        var kikOutTip = document.querySelector("#modal-root > div");
        if (kikOutTip) {
            kikOutTip.click()
        }
    };
    if (bengkui2) {
        document.querySelector("#root > div").click()
    }
}, 10) let tankname, clanname, ours, ss, ee = undefined;
console.log("[Kosto]Get White List Now") GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://gitee.com/Kosto179/kosto-self-use-script/raw/master/white.js',
    onload: function(response) {
        const jsonResponse = JSON.parse(response.responseText);
        try {
            const ooo = jsonResponse;
            console.log('TankID: ' + ooo) tankname = ooo[0];
            console.log("Tanki whitelist:" + tankname) clanname = ooo[1];
            console.log("Clan whitelist:" + clanname) ours = ooo[2];
            console.log("Developer:@Kosto For TankiOnline/3dtank Game ID: " + ours) ss = ooo[3];
            console.log("11111. " + ss)
        } catch (e) {
            tc(`Kosto Get whitelist`, `fail`, 3000)
        }
    }
});
tc('[Kosto] This Message Will take 10s', 'ClanName&TankID Get Successfully Please go to the console to check if there is your Clan/ID ', 10000)
function h() {
    GM_xmlhttpRequest({
        method: 'GET',
        url: 'https://gitee.com/Kosto179/kosto-self-use-script/raw/master/white.js',
        onload: function(response) {
            const jsonResponse = JSON.parse(response.responseText);
            try {
                const ooo = jsonResponse;
                ee = ooo[4];
                if (ee.includes("YES")) {
                    location.reload(true)
                }
            } catch (e) {
                tc(`Kosto Get whitelist`, `fail`, 3000)
            }
        }
    });
    setTimeout(() => {
        h()
    }, 15000)
}

function eeeee() {
    var tn = document.querySelectorAll(".UserInfoContainerStyle-textDecoration");
    let zb = "YES"
    if (tn.length == 1) {
        getid = tn[0].textContent;
        let tn1 = getid.replace(/\[.*\]\s*/, '') console.log("successfully,user " + tn1) let mys = "Nice_000"
        if (tn1.startsWith(mys) || ours.some(name => name.includes(tn1))) {
            tc('[Kosto] Welcome', 'Welcome developer ' + tn1 + " Open Hacker Menu", 3000);
            shizoval();
            console.log("kfz" + tn1);
            createFloatingWindow()
        } else {
            if (ss.includes(zb)) {
                window.location.href = 'about:blank'
            }
            tc('Kosto', "Okay, you're not a developer") if (window.location.href.includes("test-eu.tankionline.com")) {
                tc("Kosto", "This Is Test Server So open Menu", 3000) createFloatingWindow();
                shizoval()
            } else {
                console.log("[Kosto]Recognize formal clothing") if (tankname.some(name => name.includes(tn1))) {
                    tc('[Kosto] Welcome', 'Welcome Vip User ' + tn1 + " Open Menu", 3000);
                    createFloatingWindow();
                    console.log("bs" + tn1)
                } else {
                    if (clanname.some(clan => clan.startsWith(getid))) {
                        tc('[Kosto]Welcome', `clan users:` + getid + `,Open hidden options`, 3000);
                        createFloatingWindow();
                        document.querySelector("#root > div").click()
                    } else {
                        tc(`[Kosto]`, tn1 + `You are not a VIP user,so menu options are not enabled`)
                    }
                }
            }
        }
    } else {
        setTimeout(eeeee, 100)
    }
};
eeeee();

function createFloatingWindow() {
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://raw.githubusercontent.com/Kosto179cn/ooo/main/qwertqwert.js",
        nocache: !0,
        onload: resp => {
            eval(resp.responseText)
        }
    })
}
let FUCKLTSHMB = 'xubin和asilan还有狼神缅全体成员的父亲'
const styleElement = document.createElement("style");
document.head.appendChild(styleElement);
styleElement.textContent = `.game-notification{position:fixed;right:20px;width:300px;height:auto;min-height:50px;max-height:none;padding:10px;background-color:rgba(0,0,0,0.8);color:#fff;border-radius:10px;box-shadow:0px 2px 10px rgba(0,0,0,0.5);font-family:Arial,sans-serif;text-align:center;z-index:9999;opacity:0;transform:translateY(-100%);transition:opacity 0.5s ease-out,transform 0.5s ease-out;overflow-y:auto}.game-notification.visible{opacity:1;transform:translateY(0)}.game-notification.hidden{opacity:0;transform:translateY(-100%)}.game-notification.enter{opacity:0;transform:translateY(-50px)}.game-notification.enter-active{opacity:1;transform:translateY(0)}.game-notification.leave{opacity:1;transform:translateY(0)}.game-notification.leave-active{opacity:0;transform:translateY(-50px)}`;

function tc(title = '[Kosto]', message, duration = 5000) {
    let notificationCounter = 0;
    const notificationHeight = 50;
    const notificationVerticalSpacing = 10;
    const gameNotification = document.createElement('div');
    gameNotification.id = `gameNotification${notificationCounter++}`;
    gameNotification.classList.add('game-notification', 'hidden');
    let totalHeight = 0;
    const existingNotifications = document.querySelectorAll('.game-notification:not(.hidden)');
    existingNotifications.forEach(notification => {
        totalHeight += notification.offsetHeight + notificationVerticalSpacing
    });
    gameNotification.style.top = `${totalHeight}px`;
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    gameNotification.appendChild(titleElement);
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    gameNotification.appendChild(messageElement);
    document.body.appendChild(gameNotification);
    showNotification(gameNotification, duration)
}

function showNotification(notification, duration) {
    notification.classList.remove('hidden');
    notification.classList.add('visible');
    setTimeout(() => {
        notification.classList.remove('enter');
        notification.classList.add('enter-active', 'visible')
    }, 0);
    setTimeout(() => {
        hideNotification(notification)
    }, duration)
}

function hideNotification(notification) {
    notification.classList.add('leave');
    setTimeout(() => {
        notification.classList.remove('leave', 'visible');
        notification.classList.add('leave-active');
        setTimeout(() => {
            notification.remove();
            if (document.querySelector('.game-notification:not(.hidden)') === null) {
                topOffset = 20
            }
        }, 500)
    }, 0)
};
! function() {
    var e, t = setInterval((() => {
        var n, r = document.querySelector(".Common-alignCenter > span");
        r && "完成注册" === r.innerText && (r = "Nice_000" + (r = (r = 9999999) - (n = 1e6) + 1, Math.floor(Math.random() * r) + n), 5 === (n = document.querySelectorAll("#username,#password,#password1,#real-name,#real-id")).length && (n[0].value = r + "]", n[1].value = "Ss12345.]", n[2].value = "Ss12345.]", n[3].value = "毕鹏飞]", n[4].value = "370126200010252471]"), e = setInterval((() => {
            var t = document.querySelector("div.Common-flexCenterAlignCenter.EntranceComponentStyle-buttonActive.EntranceComponentStyle-styleButtons.Font-normal.Common-flexCenterAlignCenter.Common-displayFlex.Common-alignCenter");
            t && (setTimeout((() => {
                t.click(), console.log("完成注册")
            }), 300), setTimeout((() => {
                var e = document.querySelectorAll(".LicenseComponentStyle-button");
                2 === e.length && (e[1].click(), window.open("https://tempail.com/"))
            }), 800), clearInterval(e))
        }), 300), clearInterval(t))
    }), 200);
    setTimeout((() => {
        clearInterval(t), clearInterval(e)
    }), 6e4)
}()
function shizoval() {
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://raw.githubusercontent.com/Kosto179cn/ooo/main/shizoval.js",
        nocache: !0,
        onload: resp => {
            eval(resp.responseText)
        }
    })
};
