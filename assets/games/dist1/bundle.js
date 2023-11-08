/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("var start = document.getElementById('new');\r\nvar flying = true;//用于判断小鸟的运动\r\n// 初始化小鸟\r\nvar birds = {\r\n    stepx: 52,\r\n    stepy: 0,\r\n    x: bird.offsetLeft,\r\n    y: bird.offsetTop\r\n}\r\n//背景\r\nvar sky = {\r\n    x: 0\r\n}\r\nvar count = 0;//计数\r\nvar bg = setInterval(function () {\r\n    sky.x -= 2;//控制背景移动\r\n    contaner.style.backgroundPositionX = sky.x + 'px';\r\n    birds.stepy += 1;//小鸟下落\r\n    birds.y += birds.stepy;\r\n    if (birds.stepy >= 10) {//小鸟运动\r\n        birds.stepy = -10;//小鸟飞起\r\n        birds.y += birds.stepy;\r\n    }\r\n    bird.style.top = birds.y + 'px';\r\n}, 30)\r\nlet one = false;\r\ndocument.addEventListener('keydown', (e) => {\r\n    console.log(e.keyCode);\r\n    if (e.keyCode === 27 && !one) {\r\n        one = true;\r\n        start.style.display = 'none';\r\n        co.innerHTML = count;\r\n        results.innerHTML = count;\r\n        clearInterval(bg);//清除小鸟自动飞\r\n        birds.stepy = 0;//初始化\r\n        setInterval(function () {\r\n            if (flying) {\r\n                sky.x -= 5;\r\n                contaner.style.backgroundPositionX = sky.x + 'px';//控制背景移动\r\n                birds.y += birds.stepy;\r\n                birds.x = birds.stepx;\r\n                birds.stepy += 1;//小鸟下落\r\n                if (birds.y <= 0) {//判断小鸟是否撞到顶\r\n                    flying = false;\r\n                    mask.style.display = \"block\";\r\n                    success.style.display = \"block\";\r\n                    co.style.display = \"none\";\r\n                }\r\n                if (birds.y + bird.offsetHeight >= 600) {//判断小鸟是否掉落到底\r\n                    flying = false;\r\n                    mask.style.display = \"block\";\r\n                    success.style.display = \"block\";\r\n                    co.style.display = \"none\";\r\n                }\r\n                bird.style.top = birds.y + 'px';\r\n                bird.style.left = birds.x + 'px';\r\n            }\r\n        }, 30)\r\n        document.addEventListener('keydown',e => {\r\n            if(e.keyCode === 32){\r\n                birds.stepy = -10;//点击一次小鸟飞起\r\n            }\r\n        })\r\n        function createzz(x) {//初始化柱子属性\r\n            var zz = {};\r\n            zz.x = x;\r\n            zz.uheight = 50 + Math.ceil(Math.random() * 200);//随机上柱子的高度\r\n            zz.dheight = 600 - 150 - zz.uheight;//下柱子的高度\r\n            //创建柱子\r\n            var uzz = document.createElement('div');//创建上柱子\r\n            uzz.style.height = zz.uheight + 'px';\r\n            uzz.style.width = '52px';\r\n            uzz.style.position = 'absolute';\r\n            uzz.style.left = zz.x + 'px';\r\n            uzz.style.background = 'url(images/pipe2.png) no-repeat center bottom';\r\n            uzz.style.top = '0px';\r\n            contaner.appendChild(uzz);\r\n            var dzz = document.createElement('div');//创建下柱子\r\n            dzz.style.width = '52px';\r\n            dzz.style.height = zz.dheight + 'px';\r\n            dzz.style.position = 'absolute';\r\n            dzz.style.left = zz.x + 'px';\r\n            dzz.style.background = 'url(images/pipe1.png) no-repeat';\r\n            dzz.style.top = zz.uheight + 150 + 'px';\r\n            contaner.appendChild(dzz);\r\n            setInterval(function () {//控制柱子移动\r\n                if (flying) {\r\n                    zz.x -= 5;\r\n                    uzz.style.left = zz.x + 'px';\r\n                    dzz.style.left = zz.x + 'px';\r\n                    if (zz.x <= -52) {//柱子移动到左边后回到右边一直循环\r\n                        zz.x = 1450;\r\n                    }\r\n                    if (zz.x >= 0 && birds.x >= zz.x + 52) {//判断小鸟飞过柱子并计数\r\n                        count++;\r\n                        co.innerHTML = count;\r\n                        results.innerHTML = count;\r\n                    }\r\n                    //判断小鸟有没有撞到柱子\r\n                    var ucheck = birds.x + 30 > zz.x && birds.x < zz.x + 52 && birds.y <= zz.uheight;\r\n                    var dcheck = birds.x + 30 > zz.x && birds.x < zz.x + 52 && birds.y + 30 >= zz.uheight + 150;\r\n                    if (ucheck || dcheck) {\r\n                        flying = false;\r\n                        mask.style.display = \"block\";\r\n                        success.style.display = \"block\";\r\n                        co.style.display = \"none\";\r\n                    }\r\n                }\r\n            }, 30)\r\n        }\r\n        createzz(300);//第一对柱子\r\n        createzz(600);//第二对柱子\r\n        createzz(900);//第三对柱子\r\n        createzz(1200);//第四对柱子\r\n        createzz(1500);//第五对柱子\r\n    }\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;