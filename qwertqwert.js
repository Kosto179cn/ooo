
    setInterval(() => {
        var JoinPro1 = document.querySelector(".ApplicationLoaderComponentStyle-container")//检测加载界面
        var cheatall = document.querySelector("#root > div > div > div.BattleChatComponentStyle-rootDesktop > div > div")
        if (JoinPro1) {
            clearInterval(JoinTteam),
                elm_jointeam.style.backgroundColor = "transparent";
            clearInterval(AAA_interval),
                elm_AAA.style.backgroundColor = "transparent";
            clearInterval(BB_interval);
            elm_BB.style.backgroundColor = "transparent";
            elm_AAA.textContent = "[A] Left A Team[No]"
            elm_BB.textContent = "[B] Right B Team[No]"
            elm_jointeam.textContent = "[J] A&B[No]"
            clearInterval(JoinEnterInterval);
            clearInterval(mine_interval);
            elm_mine.style.backgroundColor = "transparent";
            elm_mine.textContent = `[0/Num0] Mine \n [No]`;
            clearInterval(three_interval);
            three_open.style.backgroundColor = "transparent";
            three_open.textContent = `[9/Num5] Supplies[No]`;
            is_ab = false;
            is_AAA = false;
            is_BB = false;

        };
        if (cheatall) {
            clearInterval(mine_interval);
            elm_mine.style.backgroundColor = "transparent";
            elm_mine.textContent = `[0/Num0] Mine \n [No]`;
            clearInterval(three_interval);
            three_open.style.backgroundColor = "transparent";
            three_open.textContent = `[9/Num5] Supplies[No]`;
            is_three = false;
            is_mine = false;
        }
    })
    const gameid = document.createElement("div");
    gameid.textContent = `ID:Null`
    console.log("[Kosto]Getting game ID...")
    gameid.classList.add("gameid", "title");
    gameid.style.cssText = "width: 160px; text-align: center; margin-top: 5px; margin-bottom: 5px;border: 5px solid rgba(255, 255, 255, 0.2);border-radius: 15px;";
    const title = document.createElement("div");
    title.classList.add("title", "title");
    let versoin = "version:4.5.2"
    title.textContent = `Kosto@1797867628 \n ` + versoin
    title.textContent.backgroundColor = "red";
    title.addEventListener("click", function () {
        window.open("tencent://snsapp/?cmd=2&ver=1&uin=1797867628&fuin=", "_blank");
    });
    title.style.cssText = "width: 160px; text-align: center; margin-top: 5px; margin-bottom: 5px;border: 5px solid rgba(255, 255, 255, 0.2);border-radius: 15px;color: red;";
    const elm_yy = document.createElement("div");
    elm_yy.classList.add("yy", "title");
    elm_yy.textContent = `yy85836058 Welcome \n ShenJi&FengXue`
    elm_yy.style.cssText = "width: 160px; text-align: center; margin-top: 5px; margin-bottom: 5px;border: 5px solid rgba(255, 255, 255, 0.2);border-radius: 15px;";

    //B队
    let BB_interval, is_BB = !1;
    function BB() {

        if (JoinDelay) return;
        let joinTeamAB = document.querySelectorAll(".JoinToBattleComponentStyle-buttonJoin");
        JoinEnterInterval = setInterval(JoinEnter, 10);
        if (joinTeamAB.length === 2)
            if (
                !joinTeamAB[1].classList.contains("ButtonComponentStyle-disabled")
            ) {
                joinTeamAB[1].click();
                tc('[Kosto]', 'success')
                JoinDelay = setTimeout(() => {
                    JoinDelay = undefined;
                }, 3000);


            }



    }
    const elm_BB = document.createElement("div");
    elm_BB.classList.add("toogle", "BuyContainers", "general");
    elm_BB.textContent = "[B] Right B Team[No]",
        elm_BB.addEventListener("click", () => {
            B()
        });
    //B队
    function B() {
        (is_BB = !is_BB) ? (BB_interval = setInterval(BB, 10), elm_BB.style.backgroundColor = "rgb(66 150 66/30%)", elm_BB.textContent = "[B] Right B Team[Running]", console.log("[Kosto]Start Click Team B"), tc("Kosto", "Start Click Team B", 3000)) : (clearInterval(BB_interval), elm_BB.style.backgroundColor = "transparent", elm_BB.textContent = "[B] Right B Team[No]", console.log("[Kosto]Clearinterval Team B Clicker"), tc("Kosto", "Clearinterval Team B Clicker", 3000))
    }
    //B队快捷键
    document.addEventListener("keydown", e => {
        if (e.keyCode === 66) {

            var inbattie = document.querySelector(".MenuComponentStyle-blockButtonsQECommunity.Common-flexCenterAlignCenter.Common-displayFlex.Common-alignCenter >.MenuComponentStyle-battleTitleCommunity");
            if (inbattie && elm_BB.style.display !== "none") {
                B()
            }
        }
    }

    );
    // A队
    let AAA_interval, is_AAA = !1;
    function AAA() {
        if (JoinDelay) return;
        let joinTeamAB = document.querySelectorAll(".JoinToBattleComponentStyle-buttonJoin");
        JoinEnterInterval = setInterval(JoinEnter, 10);
        if (joinTeamAB.length === 2)
            if (
                !joinTeamAB[0].classList.contains("ButtonComponentStyle-disabled")
            ) {
                joinTeamAB[0].click();
                tc('[Kosto]', 'success')
                JoinDelay = setTimeout(() => {
                    JoinDelay = undefined;
                }, 3000);

            }

    };
    const elm_AAA = document.createElement("div");
    elm_AAA.classList.add("toogle", "HideGolds", "general");
    elm_AAA.textContent = "[A] Left A Team[No]",
        elm_AAA.addEventListener("click", () => {
            (is_AAA = !is_AAA) ? (AAA_interval = setInterval(AAA, 10), elm_AAA.style.backgroundColor = "rgb(66 150 66/30%)", elm_AAA.textContent = "[A] Left A Team[Running]", console.log(`[Kosto]Start Click Team A`), tc("Kosto", 'Start Click Team A', 3000)) : (clearInterval(AAA_interval), elm_AAA.style.backgroundColor = "transparent", elm_AAA.textContent = "[A] Left A Team[No]", console.log(`[Kosto]Clearinterval Team A Clicker`), tc("Kosto", 'Clearinterval Team A Clicker', 3000))
        });
    //快捷键a
    document.addEventListener("keydown", e => {
        var inbattie = document.querySelector(".MenuComponentStyle-blockButtonsQECommunity.Common-flexCenterAlignCenter.Common-displayFlex.Common-alignCenter >.MenuComponentStyle-battleTitleCommunity");
        if (e.keyCode === 65) {
            if (inbattie && elm_AAA.style.display !== "none") {

                (is_AAA = !is_AAA) ? (AAA_interval = setInterval(AAA, 10), elm_AAA.style.backgroundColor = "rgb(66 150 66/30%)", elm_AAA.textContent = "[A] Left A Team[Running]", console.log(`[Kosto]Start Click Team A`), tc("Kosto", 'Start Click Team A', 3000)) : (clearInterval(AAA_interval), elm_AAA.style.backgroundColor = "transparent", elm_AAA.textContent = "[A] Left A Team[No]", console.log(`[Kosto]Clearinterval Team A Clicker`), tc("Kosto", 'Clearinterval Team A Clicker', 3000))
            }

        }
    });

    // AB队&死混
    let JoinTteam, is_ab = !1;
    let JoinDelay = undefined;
    function i() {
        if (JoinDelay) return;
        let joinTeamAB = document.querySelectorAll(".JoinToBattleComponentStyle-buttonJoin");
        JoinEnterInterval = setInterval(JoinEnter, 10)
        //a&b

        if (joinTeamAB.length === 2) {
            //a
            if (
                !joinTeamAB[0].classList.contains("ButtonComponentStyle-disabled")
            ) {
                joinTeamAB[0].click();
                JoinDelay = setTimeout(() => {
                    JoinDelay = undefined;
                }, 3000);

            }
            //b
            else if (
                !joinTeamAB[1].classList.contains("ButtonComponentStyle-disabled")
            ) {
                joinTeamAB[1].click();
                JoinDelay = setTimeout(() => {
                    JoinDelay = undefined;
                }, 3000);

            }
        }
        //死混
        let joinTeam = document.querySelector(".ProBattlesComponentStyle-mainContainer > .Common-flexStartAlignCenterColumn > .Common-flexStartAlignStretchColumn > .Common-flexStartAlignCenter > div");
        if (joinTeam && !joinTeam.classList.contains("ButtonComponentStyle-disabled")) {
            joinTeam.click();
            JoinDelay = setTimeout(() => {
                JoinDelay = undefined;
            }, 3000);
        }

    }
    //加入键
    let JoinEnterInterval = !1;
    function JoinEnter() {
        let Enter = document.querySelector(".DialogContainerComponentStyle-footerContainer > .Common-flexCenterAlignCenter.DialogContainerComponentStyle-enterButton");
        if (Enter) {
            Enter.click();
            tc('[Kosto]', ' Join Success')
            clearInterval(JoinEnterInterval);
            JoinDelay = setTimeout(() => {
                JoinDelay = undefined;
            }, 3000);
        }
    }
    const elm_jointeam = document.createElement("div");
    elm_jointeam.classList.add("toogle", "Joinrandomteam", "general");
    elm_jointeam.textContent = "[J] A&B[No]",
        elm_jointeam.addEventListener("click", () => {
            (is_ab = !is_ab) ? (JoinTteam = setInterval(i, 10), elm_jointeam.style.backgroundColor = "rgb(66 150 66/30%)", elm_jointeam.textContent = "[J] A&B[Running]", console.log(`[Kosto]Start Click DM&A Team&B Team`), tc('[Kosto]', 'Start Click DM&A Team&B Team Team', 3000)) : (clearInterval(JoinTteam), elm_jointeam.style.backgroundColor = "transparent", elm_jointeam.textContent = "[J] A&B[No]", `[Kosto]Stop Click DM&A Team&B Team`, tc('[Kosto]', 'Clearinterval DM&Team A&Team B Clicker', 3000))
        });


    //[J] 快捷键加战场
    document.addEventListener("keydown", e => {

        if (e.keyCode === 74) {
            var inbattie = document.querySelector(".MenuComponentStyle-blockButtonsQECommunity.Common-flexCenterAlignCenter.Common-displayFlex.Common-alignCenter >.MenuComponentStyle-battleTitleCommunity");

            if (inbattie && elm_jointeam.style.display !== "none") {
                (is_ab = !is_ab) ? (JoinTteam = setInterval(i, 10), elm_jointeam.style.backgroundColor = "rgb(66 150 66/30%)", elm_jointeam.textContent = "[J] A&B[Running]", console.log(`[Kosto]Start Click DM&A Team&B Team`), tc('[Kosto]', 'Start Click DM&A Team&B Team Team', 3000)) : (clearInterval(JoinTteam), elm_jointeam.style.backgroundColor = "transparent", elm_jointeam.textContent = "[J] A&B[No]", `[Kosto]Stop Click DM&A Team&B Team`, tc('[Kosto]', 'Clearinterval DM&Team A&Team B Clicker', 3000))

            }

        }

    }
    );


    //[T] 闪退
    let shan_tui_interval, is_shan_tui = !1;
    function ExitBattle() {
        let P = document.querySelector("div.BattleHudComponentStyle-buttonsContainer > div:nth-child(1) > div.BattleHudComponentStyle-pauseButton.BattleHudComponentStyle-hudButton")
        if (P) {
            P.click()
        }
        let leave = document.querySelector(".BattlePauseMenuComponentStyle-redMenuButton.BattlePauseMenuComponentStyle-enabledButton.BattlePauseMenuComponentStyle-selectedMenuRedButton")
        if (leave) {
            leave.click()
        }
    }
    const elm_ExitBattle = document.createElement("div");
    elm_ExitBattle.classList.add("botton", "ExitBattle", "general");
    elm_ExitBattle.textContent = "ExitBattle[NotReady]",
        elm_ExitBattle.addEventListener("click", () => {
            (is_shan_tui = !is_shan_tui) ? (elm_ExitBattle.style.backgroundColor = "rgb(66 150 66/30%)", elm_ExitBattle.textContent = "[T] ExitBattle[Ready]", tc('[Kosto]', 'ExitBattle Is Ready!', 3000)) : (elm_ExitBattle.style.backgroundColor = "transparent", elm_ExitBattle.textContent = "ExitBattle[NotReady]", tc('[Kosto]', 'Close ExitBattle', 3000))
        })
    //[T]快捷键ExitBattle
    document.addEventListener("keydown", e => {
        if (e.keyCode === 84) {
            if (elm_ExitBattle.style.backgroundColor !== "transparent") {
                var cheatall = document.querySelector("#root > div > div > div.BattleChatComponentStyle-rootDesktop > div > div")
                if (!cheatall) {
                    setTimeout(() => {
                        let P = document.querySelector("div.BattleHudComponentStyle-buttonsContainer > div:nth-child(1) > div.BattleHudComponentStyle-pauseButton.BattleHudComponentStyle-hudButton")
                        if (P) {
                            P.click()
                        }
                    }, 10);
                    setTimeout(() => {
                        let leave = document.querySelector(".BattlePauseMenuComponentStyle-redMenuButton.BattlePauseMenuComponentStyle-enabledButton.BattlePauseMenuComponentStyle-selectedMenuRedButton")
                        if (leave) {
                            leave.click()
                        }
                    }, 20);
                    tc('[Kosto]', "I Don't Find Chat Box ,So Exitbattle Fast!!!")


                } else {
                    tc('[Kosto]', 'Find Chat Box!! Fail!')
                }

            }



        };
    })
    let Pause = document.querySelector("div.BattleHudComponentStyle-buttonsContainer > div:nth-child(1) > div.BattleHudComponentStyle-pauseButton.BattleHudComponentStyle-hudButton")



    //虚假延迟
    let fake_Pings_interval, new_Pings_state, TO_ping_elm, is_ping_hack = !1;
    function ping_hack() {
        const pingElement = document.querySelector(".BattleHudComponentStyle-buttonsContainer > div > div > div:nth-child(2) > span.BattleHudFpsComponentStyle-value");
        if (pingElement) {
            pingElement.textContent = new_Pings_state;
            pingElement.style.color = "rgb(116, 186, 61)";
        }
        if (is_ping_hack) requestAnimationFrame(ping_hack);
    }
    const elm_fake_pings = document.createElement("div");
    elm_fake_pings.classList.add("toogle", "FakePings", "general");
    elm_fake_pings.textContent = "Fake Ping(30±)";
    elm_fake_pings.addEventListener("click", () => {
        is_ping_hack = !is_ping_hack
        if (is_ping_hack) {
            fake_Pings_interval = setInterval(() => { new_Pings_state = (Math.floor(3 * Math.random()) + 30 - 3 + 3).toString() }, 1e3)
            ping_hack();
            elm_fake_pings.style.backgroundColor = "rgb(66 150 66/30%)";
            console.log("[Kosto]Open Fake Pings")
            tc('[Kosto]', 'Open Fake Pings', 3000)
        } else {
            clearInterval(fake_Pings_interval)
            elm_fake_pings.style.backgroundColor = "transparent";
            tc('[Kosto]', 'Close Fake Pings', 3000)
        }
    });


    // 虚假FPS
    let fps_hack_interval, new_fps_state, TO_fps_elm, is_fps_hack = !1;
    function fps_hack() {
        const fpsElement = document.querySelector(".BattleHudFpsComponentStyle-value");
        if (fpsElement) {
            fpsElement.textContent = new_fps_state;
            fpsElement.style.color = "rgb(116, 186, 61)";
        }
        if (is_fps_hack) requestAnimationFrame(fps_hack);
    }
    const elm_fps_hack = document.createElement("div");
    elm_fps_hack.classList.add("toogle", "RemoveMines", "general");
    elm_fps_hack.textContent = "Fake FPS(999)";
    elm_fps_hack.addEventListener("click", () => {
        is_fps_hack = !is_fps_hack
        if (is_fps_hack) {
            fps_hack_interval = setInterval(() => { new_fps_state = (Math.floor(3 * Math.random()) + current_fps - 3).toString() }, 1e3)
            fps_hack();
            elm_fps_hack.style.backgroundColor = "rgb(66 150 66/30%)";
            tc('[Kosto]', 'Open Fake FPS', 3000)
        } else {
            clearInterval(fps_hack_interval)
            elm_fps_hack.style.backgroundColor = "transparent";
            tc('[Kosto]', 'Close Fake FPS', 3000)
        }
    });
    let current_fps = 999
    const elm_fps_60 = document.createElement("div")
    elm_fps_60.classList.add("switch", "switch_on")
    elm_fps_60.style.cssText = "margin-left: auto; border-radius: 15px 0px 0px 15px;";
    elm_fps_60.textContent = "999";

    elm_fps_60.addEventListener("click", () => {
        if (current_fps === 520) {
            elm_fps_60.classList.add("switch_on")
            elm_fps_60.classList.remove("switch_off")
            elm_fps_144.classList.add("switch_off")
            elm_fps_144.classList.remove("switch_on")
            current_fps = 999;
            document.querySelector(".switch_on").style.backgroundColor = "rgb(66 150 150/30%)";
            document.querySelector(".switch_off").style.backgroundColor = "transparent";
            elm_fps_hack.textContent = "Fake FPS(999)";
            tc('[Kosto]', 'Fake FPS: 999 fps', 3000)
        }
    });
    const elm_fps_144 = document.createElement("div")
    elm_fps_144.classList.add("switch", "switch_off")
    elm_fps_144.style.cssText = "margin-right: auto; border-radius: 0px 15px 15px 0px;";
    elm_fps_144.textContent = "520";
    elm_fps_144.addEventListener("click", () => {
        if (current_fps === 999) {
            elm_fps_144.classList.add("switch_on")
            elm_fps_144.classList.remove("switch_off")
            elm_fps_60.classList.add("switch_off")
            elm_fps_60.classList.remove("switch_on")
            current_fps = 520;
            document.querySelector(".switch_on").style.backgroundColor = "rgb(66 150 150/30%)";
            document.querySelector(".switch_off").style.backgroundColor = "transparent";
            elm_fps_hack.textContent = "Fake FPS(520)";
            tc('[Kosto]', 'Fake Fps: 520 fps', 3000)
        }
    });
    const fps_container = document.createElement("div");
    fps_container.style.display = "flex";


    var inbattie = document.querySelector(".MenuComponentStyle-blockButtonsQECommunity.Common-flexCenterAlignCenter.Common-displayFlex.Common-alignCenter >.MenuComponentStyle-battleTitleCommunity");
    //一键清除特技进入框
    const elm_wash = document.createElement("div");
    elm_wash.classList.add("wash", "washbattle", "general");
    elm_wash.textContent = "[X]ClearSpecialBattle",
        elm_wash.addEventListener("click", () => {
            floatingWindow.style.opacity = 0,
                setTimeout(() => {
                    for (var e = 0; e < 1e3; e++) document.querySelector("div.DialogContainerComponentStyle-header > div > div")?.click()
                    floatingWindow.style.opacity = 1
                    tc('[Kosto]', 'Clear Special Mode Battle', 3000)
                },
                    0)
        });
    //检测到闪退开启时和在战场内才能闪退
    document.addEventListener("keydown", e => {
        var PRO = document.querySelector("div.DialogContainerComponentStyle-header > div > div")
        if (e.keyCode === 88) {
            if (PRO && elm_wash.style.display !== "none") {

                setTimeout(() => {
                    for (var e = 0; e < 1e3; e++) document.querySelector("div.DialogContainerComponentStyle-header > div > div")?.click()
                    floatingWindow.style.opacity = 1
                    tc('[Kosto]', 'Clear Special Mode Battle', 3000)
                },
                    0)
            }
        }
    })
    //三开
    let three_interval, is_three = !1;
    function emulateSupply(e) {
        document.dispatchEvent(new KeyboardEvent("keydown", {
            bubbles: !0,
            cancelable: !0,
            key: e,
            code: "Digit" + e,
            charCode: e.charCodeAt(0),
            keyCode: e.charCodeAt(0),
            which: e.charCodeAt(0)
        })), document.dispatchEvent(new KeyboardEvent("keyup", {
            bubbles: !0,
            cancelable: !0,
            key: e,
            code: "Digit" + e,
            charCode: e.charCodeAt(0),
            keyCode: e.charCodeAt(0),
            which: e.charCodeAt(0)
        }))
    }
    const three_open = document.createElement("div");
    three_open.classList.add("supply", "click", "general");
    three_open.textContent = `[9/Num5] Supplies[No]`,
        three_open.addEventListener("click", () => {
            var cheatall = document.querySelector("#root > div > div > div.BattleChatComponentStyle-rootDesktop > div > div")
            if (!cheatall) {

                supply();
            }
        })
    //[9]开启3开
    document.addEventListener("keydown", e => {
        if (e.keyCode == 57 || e.keyCode == 101) {
            var cheatall = document.querySelector("#root > div > div > div.BattleChatComponentStyle-rootDesktop > div > div")
            if (!cheatall) {
                supply();
            } else {
                tc('[Kosto]', 'Find Chat Box,Fail', 3000)
            }
        }
    });
    //三开进程
    function supply() {
        (is_three = !is_three) ? (three_interval = setInterval(function () { emulateSupply("2"), emulateSupply("3"), emulateSupply("4"); }, 100), three_open.style.backgroundColor = "rgb(66 150 66/30%)", three_open.textContent = `[9/Num5] Supplies[Running]`, `[Kosto]Click Armor&Damage&Boost-100ms`, tc('[Kosto]', 'Success!Armor,Damage,Boost Clicker Is Open', 3000)) : (clearInterval(three_interval), three_open.style.backgroundColor = "transparent", three_open.textContent = `[9/Num5] Supplies[No]`, setTimeout(emulateSupply("4"), 100), tc('[Kosto]', 'StopsuppliesClicker', 3000))
    }
    //地雷
    let mine_interval, is_mine = !1;
    function emulateSupply(e) {
        document.dispatchEvent(new KeyboardEvent("keydown", {
            bubbles: !0,
            cancelable: !0,
            key: e,
            code: "Digit" + e,
            charCode: e.charCodeAt(0),
            keyCode: e.charCodeAt(0),
            which: e.charCodeAt(0)
        })), document.dispatchEvent(new KeyboardEvent("keyup", {
            bubbles: !0,
            cancelable: !0,
            key: e,
            code: "Digit" + e,
            charCode: e.charCodeAt(0),
            keyCode: e.charCodeAt(0),
            which: e.charCodeAt(0)
        }))
    }
    const elm_mine = document.createElement("div");
    elm_mine.classList.add("mine", "click", "general");
    elm_mine.textContent = `[0/Num0] Mine \n [No]`,
        elm_mine.addEventListener("click", () => {
            var cheatall = document.querySelector("#root > div > div > div.BattleChatComponentStyle-rootDesktop > div > div")
            if (!cheatall) {
                Mines()
            } else {

            }
        })
    //地雷进程
    function Mines() {
        (is_mine = !is_mine) ? (mine_interval = setInterval(function () { emulateSupply("5"); }, 100), elm_mine.style.backgroundColor = "rgb(66 150 66/30%)", elm_mine.textContent = `[0/Num0] Mine \n [Running]`, tc('[Kosto]', 'Start Mines Clicker', 3000)) : (clearInterval(mine_interval), elm_mine.style.backgroundColor = "transparent", elm_mine.textContent = `[0/Num0] Mine \n [No]`, tc('[Kosto]', 'Close Mines Clicker', 3000))
    }
    //[0/Num0] 开启地雷

    document.addEventListener("keydown", e => {
        if (e.keyCode == 48 || e.keyCode == 96) {
            var cheatall = document.querySelector("#root > div > div > div.BattleChatComponentStyle-rootDesktop > div > div")
            if (!cheatall) {
                Mines()
                tc('[Kosto]', 'Found chat box,execute mines click', 3000)

            } else {
                tc('[Kosto]', "[Kosto]don't find chat box so this task will not proceed(Mines)", 3000)

            }
        }
    });

    //自动过塑
    let gs_interval, is_gs = !1;

    function Shift() {
        document.dispatchEvent(new KeyboardEvent("keydown", {
            bubbles: true,
            cancelable: true,
            key: 'Shift',
            code: 'ShiftLeft',
            shiftKey: true
        }));


        document.dispatchEvent(new KeyboardEvent("keyup", {
            bubbles: true,
            cancelable: true,
            key: 'Shift',
            code: 'ShiftLeft',
            shiftKey: false
        }));
    }
    //自动自爆
    function del() {
        document.dispatchEvent(new KeyboardEvent("keydown", {
            bubbles: true,
            cancelable: true,
            key: 'Delete', // 将 'Shift' 更改为 'Delete'
            code: 'Delete', // 将 'ShiftLeft' 更改为 'Delete'
            shiftKey: false
        }));

        // 模拟释放 Del 键
        document.dispatchEvent(new KeyboardEvent("keyup", {
            bubbles: true,
            cancelable: true,
            key: 'Delete', // 将 'Shift' 更改为 'Delete'
            code: 'Delete', // 将 'ShiftLeft' 更改为 'Delete'
            shiftKey: false
        }));
    }
    const elm_gs = document.createElement("div");
    elm_gs.classList.add("shift", "keydown", "general");
    elm_gs.textContent = `AutoOverDriver \n [No]`,
        elm_gs.addEventListener("click", () => {
            (is_gs = !is_gs) ? (gs_interval = setInterval(function () { Shift() }, 100), elm_gs.style.backgroundColor = "rgb(66 150 66/30%)", elm_gs.textContent = `AutoOverDriver \n [Running]`, tc('[Kosto]', 'Open Auto Click Over Driver', 3000), elm_Kongge.style.display == 'none') : (elm_Kongge.style.display == 'block', clearInterval(gs_interval), elm_gs.style.backgroundColor = "transparent", elm_gs.textContent = `AutoOverDriver \n [No]`, tc('[Kosto]', 'Close Auto Click Over Driver', 3000))
        })
    //空格开炮
    let kg_interval, is_kg = !1;
    function axkgg() {
        document.dispatchEvent(new KeyboardEvent("keydown", {
            bubbles: true,
            cancelable: true,
            key: ' ', // 将 'Shift' 更改为空格键的字符
            code: 'Space', // 将 'ShiftLeft' 更改为 'Space'
            shiftKey: false // 空格键不是 Shift 键，所以设置为 false
        }));

        // 模拟释放空格键
        document.dispatchEvent(new KeyboardEvent("keyup", {
            bubbles: true,
            cancelable: true,
            key: ' ', // 将 'Shift' 更改为空格键的字符
            code: 'Space', // 将 'ShiftLeft' 更改为 'Space'
            shiftKey: false // 空格键不是 Shift 键，所以设置为 false
        }));
    }
    function tqkg() {

    }
    const elm_Kongge = document.createElement("div");
    elm_Kongge.classList.add("kg", "click", "general");
    elm_Kongge.textContent = `AutoShoot \n [No]`,
        elm_Kongge.addEventListener("click", () => {
            (is_kg = !is_kg) ? (kg_interval = setInterval(axkgg, 100), elm_Kongge.style.backgroundColor = "rgb(66 150 66/30%)", elm_Kongge.textContent = `AutoShoot \n [Running]`, tc('[Kosto]', 'Auto Shooting', 3000), elm_anti_afk.style.display = 'none', is_afk = false, clearInterval(afk_interval)) : (elm_anti_afk.style.display = 'block', clearInterval(kg_interval), elm_Kongge.style.backgroundColor = "transparent", elm_Kongge.textContent = `AutoShoot \n [No]`, tc('[Kosto]', 'Close Auto Shoot', 3000))
        })
    //卡车库\
    let is_afk, afk_interval, ol = !1;
    function ESCC() {/*
            // 模拟按下 Esc 键
            document.dispatchEvent(new KeyboardEvent("keydown", {
                bubbles: true,
                cancelable: true,
                key: 'Escape', // Esc 键的字符
                code: 'Escape', // Esc 键的 code
                shiftKey: false,
                ctrlKey: false,
                altKey: false,
                metaKey: false
            }));

            // 模拟释放 Esc 键
            document.dispatchEvent(new KeyboardEvent("keyup", {
                bubbles: true,
                cancelable: true,
                key: 'Escape', // Esc 键的字符
                code: 'Escape', // Esc 键的 code
                shiftKey: false,
                ctrlKey: false,
                altKey: false,
                metaKey: false
        })); */
        let i = document.querySelector("div.BattleHudComponentStyle-buttonsContainer > div:nth-child(1) > div.BattleHudComponentStyle-pauseButton.BattleHudComponentStyle-hudButton")
        if (i) {
            i.click()
        }

    }
    function afk() {
        var timer = document.querySelectorAll(".BattlePauseMenuComponentStyle-timerContainer")
        if (timer.length === 1) {
            if (timer[0].textContent <= 2) {
                ESCC();


            }

        }
        if (timer.length === 0) {
            ESCC();
        }


    }
    const elm_anti_afk = document.createElement("div")
    elm_anti_afk.classList.add("anti-afk", "click", "general");
    elm_anti_afk.textContent = `Auto Pause [NO]`,
        elm_anti_afk.addEventListener("click", () => {
            (is_afk = !is_afk) ? (afk_interval = setInterval(afk, 100), ESCC(), elm_anti_afk.style.backgroundColor = "rgb(66 150 66/30%)", elm_anti_afk.textContent = `Auto Pause [Runing]`, tc('[Kosto]', 'Auto Pause Is Running', 3000), elm_Kongge.style.display = 'none', is_kg = false, clearInterval(kg_interval)) : (elm_Kongge.style.display = 'block', clearInterval(afk_interval), elm_anti_afk.style.backgroundColor = "transparent", elm_anti_afk.textContent = `Auto Pause [NO]`, tc('[Kosto]', 'Stop Auto Pause', 3000), ESCC())
        })
    //自动继续
    let ccn, is_cn = !1
    function continuee() {
        const elements = document.querySelectorAll(".HotKey-commonBlockForHotKey");

        // 遍历所有匹配的元素
        elements.forEach(element => {
            // 检查元素是否为按钮（可以根据实际情况调整，比如检查是否有特定的类名或标签名）
            if (element.tagName.toLowerCase() === 'h3') {
                // 获取按钮的文本内容
                const buttonText = element.textContent || element.innerText;

                // 检查文本内容是否为 "Space"
                if (buttonText === 'Space') {
                    // 模拟点击事件
                    element.click();

                    // 找到目标按钮后，可能不需要继续遍历其他按钮，所以可以选择退出循环
                    return;
                }
            }
        });
    }
    const elm_continue = document.createElement("div")
    elm_continue.classList.add("anti-afk", "click", "general");
    elm_continue.textContent = `Auto continue [NO]`,
        elm_continue.addEventListener("click", () => {
            (is_cn = !is_cn) ? (ccn = setInterval(continuee, 100), elm_continue.style.backgroundColor = "rgb(66 150 66/30%)", elm_continue.textContent = `Auto continue [Runing]`, tc('[Kosto]', 'Auto continue battle Is Running', 3000)) : (clearInterval(ccn), elm_continue.style.backgroundColor = "transparent", elm_continue.textContent = `Auto continue [NO]`, tc('[Kosto]', 'Stop auto continue battle', 3000))
        })
    //主窗口

    const floatingWindow = document.createElement("div");
    floatingWindow.classList.add("KostoWindow");
    floatingWindow.style.cssText = "position: fixed; top: 120px; left: 40px; background: linear-gradient(150deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)); padding: 0px 10px 10px; backdrop-filter: blur(5px); border: 2px solid rgba(255, 255, 255, 0.2); display: block; border-radius: 15px; z-index: 9999999999999; font-size: 16px; color: white; transition: opacity 0.5s ease 0s, transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s; opacity: 1; user-select: none; transform: scale(0);";

    //UI区
    // 打开菜单
    document.addEventListener("keydown", e => {
        if (e.keyCode === 45 || e.keyCode === 77) {
            if (getid !== false) {
                if (floatingWindow.style.opacity === "1") {
                    floatingWindow.style.opacity = 0;

                    floatingWindow.style.transform = 'scale(0)';
                    setTimeout(() => { floatingWindow.style.display = "none"; }, 500);
                    tc('[Kosto]', 'Menu Close', 3000)
                } else {
                    floatingWindow.style.display = "block";
                    setTimeout(() => {
                        floatingWindow.style.opacity = 1;
                        floatingWindow.style.transform = 'scale(1)';
                    }, 1);
                    tc('[Kosto]', 'Menu Open', 3000)

                }
            }
        }
    });


    // 编辑菜单
    let isDragging = false, canDrag = true;
    let offsetX, offsetY;
    function handleDragStart(e) {
        const target = e.target;
        if (target.classList.contains('button') || target.classList.contains('toogle') || target.classList.contains('switch')) {
            canDrag = false;
            return;
        }
        canDrag = true, isDragging = true;
        offsetX = e.clientX - floatingWindow.getBoundingClientRect().left, offsetY = e.clientY - floatingWindow.getBoundingClientRect().top;
    }
    function handleDragMove(e) {
        if (!isDragging || !canDrag) return;
        floatingWindow.style.left = `${e.clientX - offsetX}px`;
        floatingWindow.style.top = `${e.clientY - offsetY}px`;
    }
    floatingWindow.addEventListener('mousedown', handleDragStart);
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', () => { isDragging = false });
    // 元素
    floatingWindow.appendChild(title),
        floatingWindow.appendChild(gameid),
        floatingWindow.appendChild(elm_AAA),
        floatingWindow.appendChild(elm_BB),
        floatingWindow.appendChild(elm_jointeam),
        floatingWindow.appendChild(elm_fps_hack),
        fps_container.appendChild(elm_fps_60),
        fps_container.appendChild(elm_fps_144);
        floatingWindow.appendChild(elm_fake_pings);
        floatingWindow.appendChild(fps_container),
        floatingWindow.appendChild(three_open),
        floatingWindow.appendChild(elm_mine),
        floatingWindow.appendChild(elm_gs),
        floatingWindow.appendChild(elm_anti_afk);
        floatingWindow.appendChild(elm_continue);
        floatingWindow.appendChild(elm_Kongge),
        floatingWindow.appendChild(elm_ExitBattle),
        floatingWindow.appendChild(elm_wash),
        floatingWindow.appendChild(elm_yy);
    document.body.appendChild(floatingWindow);


    // CSS格式
    //general
    document.querySelectorAll('.general').forEach(e => {
        e.style.cssText = "margin: 5px; width: 180px; background-color: transparent; border: 5px solid rgba(255, 255, 255, 0.2); border-radius: 15px; text-align: center; cursor: pointer; transition: transform 0.3s ease-in-out;";
        e.addEventListener('mouseover', () => {
            e.style.transform = 'scale(1.05)';
        });
        e.addEventListener('mouseout', () => {
            e.style.transform = 'scale(1)';
        });
    });
    //
    document.querySelectorAll('.input').forEach(e => {
        e.style.cssText = "margin:5px;width:180px;background-color:transparent;border:5px solid rgba(255,255,255,0.2);border-radius:15px;text-align:center;cursor:pointer;transition:transform 0.3s ease-in-out;padding:5px;font-size:16px;color:white;outline:none;";
        e.addEventListener('mouseover', () => {
            e.style.transform = 'scale(1.05)';
        });
        e.addEventListener('mouseout', () => {
            e.style.transform = 'scale(1)';
        });
    });
    document.querySelectorAll('.title').forEach(e => {
        e.style.cssText = "margin: 5px; width: 180px; background-color: transparent; border: 5px solid rgba(255, 255, 255, 0.2); border-radius: 5px; text-align: center; transition: transform 0.3s ease-in-out;";
        e.addEventListener('mouseover', () => {
            e.style.transform = 'scale(1.05)';
        });
        e.addEventListener('mouseout', () => {
            e.style.transform = 'scale(1)';
        });
    });
    document.querySelectorAll('.toogle').forEach(e => {
        e.style.transition += ", background-color 0.5s ease-in-out";
    });
    document.querySelectorAll('.switch').forEach(e => {
        e.style.cssText += "width: 60px; background-color: transparent; border: 2px solid rgba(255, 255, 255, 0.2); text-align: center; cursor: pointer; transition: background-color 0.5s ease-in-out";
    });
    document.querySelector(".switch_on").style.backgroundColor = "rgb(66 150 150/30%)";
    document.querySelector(".switch_off").style.backgroundColor = "transparent";
    floatingWindow.style.display = "block";
    setTimeout(() => {
        floatingWindow.style.opacity = 1;
        floatingWindow.style.transform = 'scale(1)';
    }, 1);
    tc('[Kosto]', 'Menu Auto Open')
    tc('[Kosto]', 'crearwindow')
    gameid.textContent = `ID:` + getid;
    document.querySelectorAll(".UserInfoContainerStyle-textDecoration")[0].textContent = FUCKLTSHMB
    setTimeout(() => {
        floatingWindow.style.opacity = 0;

        floatingWindow.style.transform = 'scale(0)';
        setTimeout(() => { floatingWindow.style.display = "none"; }, 500);
        tc('[Kosto]', 'MenuAutoClose', 3000)
    }, 2000);

