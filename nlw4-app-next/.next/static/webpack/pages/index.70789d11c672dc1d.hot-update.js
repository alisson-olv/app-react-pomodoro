"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallengesContext\": function() { return /* binding */ ChallengesContext; },\n/* harmony export */   \"ChallengesProvider\": function() { return /* binding */ ChallengesProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"../../../../node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ChallengesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ChallengesProvider(param) {\n    let { children , ...rest } = param;\n    _s();\n    var _rest_level;\n    const [level, setLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_rest_level = rest.level) !== null && _rest_level !== void 0 ? _rest_level : 1);\n    var _rest_currentExperience;\n    const [currentExperience, setCurrentExperience] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_rest_currentExperience = rest.currentExperience) !== null && _rest_currentExperience !== void 0 ? _rest_currentExperience : 0);\n    var _rest_challengesCompleted;\n    const [challengesCompleted, setChallengesCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_rest_challengesCompleted = rest.challengesCompleted) !== null && _rest_challengesCompleted !== void 0 ? _rest_challengesCompleted : 0);\n    const [activeChallenge, setActiveChallenge] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        Notification.requestPermission();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"level\", String(level));\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"currentExperience\", String(currentExperience));\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"challengesCompleted\", String(challengesCompleted));\n    }, [\n        level,\n        currentExperience,\n        challengesCompleted\n    ]);\n    function levelUp() {\n        setLevel(level + 1);\n    }\n    function startNewChallenge() {\n        const randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_3__.length);\n        const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_3__[randomChallengeIndex];\n        setActiveChallenge(challenge);\n        new Audio(\"/notification.mp3\").play();\n        if (Notification.permission === \"granted\") {\n            new Notification(\"Novo desafio \\uD83C\\uDF89\", {\n                body: \"Valendo \".concat(challenge.amount, \"xp!\"),\n                silent: true\n            });\n        }\n    }\n    function resetChallenge() {\n        setActiveChallenge(null);\n    }\n    function completeChallenge() {\n        if (!activeChallenge) {\n            return;\n        }\n        const { amount  } = activeChallenge;\n        let finalExperience = currentExperience + amount;\n        if (finalExperience >= experienceToNextLevel) {\n            finalExperience = finalExperience - experienceToNextLevel;\n            levelUp();\n        }\n        setCurrentExperience(finalExperience);\n        setActiveChallenge(null);\n        setChallengesCompleted(challengesCompleted + 1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChallengesContext.Provider, {\n        value: {\n            level,\n            levelUp,\n            currentExperience,\n            experienceToNextLevel,\n            challengesCompleted,\n            startNewChallenge,\n            activeChallenge,\n            resetChallenge,\n            completeChallenge\n        },\n        children: [\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LevelUpModal, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\\\xc1lissonSouza\\\\Documents\\\\Projetos\\\\NLW4\\\\nlw4-app-next\\\\src\\\\contexts\\\\ChallengesContext.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\\\xc1lissonSouza\\\\Documents\\\\Projetos\\\\NLW4\\\\nlw4-app-next\\\\src\\\\contexts\\\\ChallengesContext.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n_s(ChallengesProvider, \"rRgkk49nHdmxiilpCV+wZetkgvA=\");\n_c = ChallengesProvider;\nvar _c;\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0U7QUFDdEM7QUFDZTtBQTJCeEMsTUFBTUssa0NBQW9CTCxvREFBYUEsQ0FBQyxDQUFDLEdBQTRCO0FBRXJFLFNBQVNNLG1CQUFtQixLQUE4QyxFQUFFO1FBQWhELEVBQUVDLFNBQVEsRUFBRSxHQUFHQyxNQUErQixHQUE5Qzs7UUFDRUE7SUFBbkMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDTSxDQUFBQSxjQUFBQSxLQUFLQyxLQUFLLGNBQVZELHlCQUFBQSxjQUFjLENBQUM7UUFDU0E7SUFBM0QsTUFBTSxDQUFDRyxtQkFBbUJDLHFCQUFxQixHQUFHViwrQ0FBUUEsQ0FBQ00sQ0FBQUEsMEJBQUFBLEtBQUtHLGlCQUFpQixjQUF0QkgscUNBQUFBLDBCQUEwQixDQUFDO1FBQ3ZCQTtJQUEvRCxNQUFNLENBQUNLLHFCQUFxQkMsdUJBQXVCLEdBQUdaLCtDQUFRQSxDQUFDTSxDQUFBQSw0QkFBQUEsS0FBS0ssbUJBQW1CLGNBQXhCTCx1Q0FBQUEsNEJBQTRCLENBQUM7SUFFNUYsTUFBTSxDQUFDTyxpQkFBaUJDLG1CQUFtQixHQUFHZCwrQ0FBUUEsQ0FBWSxJQUFJO0lBRXRFLE1BQU1lLHdCQUF3QkMsS0FBS0MsR0FBRyxDQUFDLENBQUNWLFFBQVEsS0FBSyxHQUFHO0lBRXhEUixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RtQixhQUFhQyxpQkFBaUI7SUFDaEMsR0FBRyxFQUFFO0lBRUxwQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RFLHFEQUFXLENBQUMsU0FBU29CLE9BQU9kO1FBQzVCTixxREFBVyxDQUFDLHFCQUFxQm9CLE9BQU9aO1FBQ3hDUixxREFBVyxDQUFDLHVCQUF1Qm9CLE9BQU9WO0lBQzVDLEdBQUc7UUFBQ0o7UUFBT0U7UUFBbUJFO0tBQW9CO0lBRWxELFNBQVNXLFVBQVU7UUFDakJkLFNBQVNELFFBQVE7SUFDbkI7SUFFQSxTQUFTZ0Isb0JBQW9CO1FBQzNCLE1BQU1DLHVCQUF1QlIsS0FBS1MsS0FBSyxDQUFDVCxLQUFLVSxNQUFNLEtBQUt4QixvREFBaUI7UUFDekUsTUFBTTBCLFlBQVkxQiw2Q0FBVSxDQUFDc0IscUJBQXFCO1FBRWxEVixtQkFBbUJjO1FBRW5CLElBQUlDLE1BQU0scUJBQXFCQyxJQUFJO1FBRW5DLElBQUlaLGFBQWFhLFVBQVUsS0FBSyxXQUFXO1lBQ3pDLElBQUliLGFBQWEsNkJBQW1CO2dCQUNsQ2MsTUFBTSxXQUE0QixPQUFqQkosVUFBVUssTUFBTSxFQUFDO2dCQUNsQ0MsUUFBUSxJQUFJO1lBQ2Q7UUFDRixDQUFDO0lBQ0g7SUFFQSxTQUFTQyxpQkFBaUI7UUFDeEJyQixtQkFBbUIsSUFBSTtJQUN6QjtJQUVBLFNBQVNzQixvQkFBb0I7UUFDM0IsSUFBSSxDQUFDdkIsaUJBQWlCO1lBQ3BCO1FBQ0YsQ0FBQztRQUVELE1BQU0sRUFBRW9CLE9BQU0sRUFBRSxHQUFHcEI7UUFFbkIsSUFBSXdCLGtCQUFrQjVCLG9CQUFvQndCO1FBRTFDLElBQUlJLG1CQUFtQnRCLHVCQUF1QjtZQUM1Q3NCLGtCQUFrQkEsa0JBQWtCdEI7WUFDcENPO1FBQ0YsQ0FBQztRQUVEWixxQkFBcUIyQjtRQUNyQnZCLG1CQUFtQixJQUFJO1FBQ3ZCRix1QkFBdUJELHNCQUFzQjtJQUMvQztJQUVBLHFCQUNFLDhEQUFDUixrQkFBa0JtQyxRQUFRO1FBQ3pCQyxPQUFPO1lBQ0xoQztZQUNBZTtZQUNBYjtZQUNBTTtZQUNBSjtZQUNBWTtZQUNBVjtZQUNBc0I7WUFDQUM7UUFDRjs7WUFFQy9COzBCQUNELDhEQUFDbUM7Ozs7Ozs7Ozs7O0FBR1AsQ0FBQztHQWhGZXBDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dC50c3g/YTU5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XHJcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG4gIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlO1xyXG4gIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgY29tcGxldGVDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHsgY2hpbGRyZW4sIC4uLnJlc3QgfTogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpIHtcclxuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKHJlc3QubGV2ZWwgPz8gMSk7XHJcbiAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZShyZXN0LmN1cnJlbnRFeHBlcmllbmNlID8/IDApO1xyXG4gIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKHJlc3QuY2hhbGxlbmdlc0NvbXBsZXRlZCA/PyAwKTtcclxuXHJcbiAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlPENoYWxsZW5nZT4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWVzLnNldCgnbGV2ZWwnLCBTdHJpbmcobGV2ZWwpKTtcclxuICAgIENvb2tpZXMuc2V0KCdjdXJyZW50RXhwZXJpZW5jZScsIFN0cmluZyhjdXJyZW50RXhwZXJpZW5jZSkpO1xyXG4gICAgQ29va2llcy5zZXQoJ2NoYWxsZW5nZXNDb21wbGV0ZWQnLCBTdHJpbmcoY2hhbGxlbmdlc0NvbXBsZXRlZCkpO1xyXG4gIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWRdKTtcclxuXHJcbiAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcclxuICAgIHNldExldmVsKGxldmVsICsgMSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcclxuICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpO1xyXG4gICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF07XHJcblxyXG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSk7XHJcblxyXG4gICAgbmV3IEF1ZGlvKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKTtcclxuXHJcbiAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdncmFudGVkJykge1xyXG4gICAgICBuZXcgTm90aWZpY2F0aW9uKCdOb3ZvIGRlc2FmaW8g8J+OiScsIHtcclxuICAgICAgICBib2R5OiBgVmFsZW5kbyAke2NoYWxsZW5nZS5hbW91bnR9eHAhYCxcclxuICAgICAgICBzaWxlbnQ6IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxlbmdlKCkge1xyXG4gICAgaWYgKCFhY3RpdmVDaGFsbGVuZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XHJcblxyXG4gICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xyXG5cclxuICAgIGlmIChmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKSB7XHJcbiAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcclxuICAgICAgbGV2ZWxVcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKyAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBsZXZlbCxcclxuICAgICAgICBsZXZlbFVwLFxyXG4gICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxyXG4gICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcclxuICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxyXG4gICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxyXG4gICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICByZXNldENoYWxsZW5nZSxcclxuICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8TGV2ZWxVcE1vZGFsIC8+XHJcbiAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29va2llcyIsImNoYWxsZW5nZXMiLCJDaGFsbGVuZ2VzQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdCIsImxldmVsIiwic2V0TGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldENoYWxsZW5nZXNDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJzZXQiLCJTdHJpbmciLCJsZXZlbFVwIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwiQXVkaW8iLCJwbGF5IiwicGVybWlzc2lvbiIsImJvZHkiLCJhbW91bnQiLCJzaWxlbnQiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiZmluYWxFeHBlcmllbmNlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIkxldmVsVXBNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n"));

/***/ })

});