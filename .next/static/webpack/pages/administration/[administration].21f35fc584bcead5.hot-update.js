"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/administration/[administration]",{

/***/ "./pages/administration/[administration].jsx":
/*!***************************************************!*\
  !*** ./pages/administration/[administration].jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Administration.module.css */ \"./styles/Administration.module.css\");\n/* harmony import */ var _styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_AjouterEleve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AjouterEleve */ \"./components/AjouterEleve.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst administration = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [path, setPath] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [elementAffiche, setElementAffiche] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const changeElement = (element)=>{\n        setElementAffiche(element);\n    };\n    const [formulaireAffiche, setFormulaireAffiche] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const changeFormulaire = (element)=>{\n        setFormulaireAffiche(element);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { administration  } = router.query;\n        if (administration) {\n            setPath(administration);\n        }\n    }, [\n        router.query\n    ]);\n    // console.log(path);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4___default().contenu),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4___default().entete),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: elementAffiche === \"\\xc9l\\xe8ve\" ? (_styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\",\n                                onClick: ()=>{\n                                    changeElement(\"\\xc9l\\xe8ve\");\n                                    changeFormulaire(\"\");\n                                },\n                                children: \"\\xc9l\\xe8ve\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                                lineNumber: 29,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: elementAffiche === \"Professeur\" ? (_styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\",\n                                onClick: ()=>{\n                                    changeElement(\"Professeur\");\n                                    changeFormulaire(\"\");\n                                },\n                                children: \"Professeur\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                                lineNumber: 37,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: elementAffiche === \"\\xc9tablissement\" ? (_styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\",\n                                onClick: ()=>{\n                                    changeElement(\"\\xc9tablissement\");\n                                    changeFormulaire(\"\");\n                                },\n                                children: \"\\xc9tablissement\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                                lineNumber: 45,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: elementAffiche === \"Ville\" ? (_styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\",\n                                onClick: ()=>{\n                                    changeElement(\"Ville\");\n                                    changeFormulaire(\"\");\n                                },\n                                children: \"Ville\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                                lineNumber: 53,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                        lineNumber: 28,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, undefined),\n                elementAffiche === \"\\xc9l\\xe8ve\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4___default().entete),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: formulaireAffiche === \"Inscrire\" ? (_styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\",\n                                onClick: ()=>{\n                                    changeElement(\"\");\n                                    changeFormulaire(\"Inscrire\");\n                                },\n                                children: \"Inscrire\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                                lineNumber: 67,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: formulaireAffiche === \"Modifier\" ? (_styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\",\n                                onClick: ()=>{\n                                    changeElement(\"\");\n                                    changeFormulaire(\"Modifier\");\n                                },\n                                children: \"Modifier\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                                lineNumber: 75,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: formulaireAffiche === \"Supprimer\" ? (_styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\",\n                                onClick: ()=>{\n                                    changeElement(\"\");\n                                    changeFormulaire(\"Supprimer\");\n                                },\n                                children: \"Supprimer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                                lineNumber: 83,\n                                columnNumber: 8\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                        lineNumber: 66,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                    lineNumber: 65,\n                    columnNumber: 6\n                }, undefined),\n                formulaireAffiche === \"Inscrire\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AjouterEleve__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                    lineNumber: 94,\n                    columnNumber: 42\n                }, undefined),\n                formulaireAffiche === \"Modifier\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Modifier les informations d'un eleve\"\n                }, void 0, false, {\n                    fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                    lineNumber: 95,\n                    columnNumber: 42\n                }, undefined),\n                formulaireAffiche === \"Supprimer\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Supprimer un eleve\"\n                }, void 0, false, {\n                    fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                    lineNumber: 96,\n                    columnNumber: 43\n                }, undefined),\n                elementAffiche === \"Professeur\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4___default().entete),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: formulaireAffiche === \"Ajouter un professeur\" ? (_styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\",\n                                onClick: ()=>changeFormulaire(\"Ajouter un professeur\"),\n                                children: \"Ajouter un professeur\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                                lineNumber: 101,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: formulaireAffiche === \"Modifier les infos\" ? (_styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\",\n                                onClick: ()=>changeFormulaire(\"Modifier les infos\"),\n                                children: \"Modifier les infos\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                                lineNumber: 106,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: formulaireAffiche === \"Supprimer un professeur\" ? (_styles_Administration_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\",\n                                onClick: ()=>changeFormulaire(\"Supprimer un professeur\"),\n                                children: \"Supprimer un professeur\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                                lineNumber: 111,\n                                columnNumber: 8\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                        lineNumber: 100,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                    lineNumber: 99,\n                    columnNumber: 6\n                }, undefined),\n                formulaireAffiche === \"Ajouter un professeur\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Ajouter un professeur\"\n                }, void 0, false, {\n                    fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                    lineNumber: 119,\n                    columnNumber: 55\n                }, undefined),\n                formulaireAffiche === \"Modifier les infos\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Modifier les infos\"\n                }, void 0, false, {\n                    fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                    lineNumber: 120,\n                    columnNumber: 52\n                }, undefined),\n                formulaireAffiche === \"Supprimer un professeur\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Supprimer un professeur\"\n                }, void 0, false, {\n                    fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n                    lineNumber: 121,\n                    columnNumber: 57\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n            lineNumber: 26,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kante/Desktop/gestion-education/pages/administration/[administration].jsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, undefined);\n};\n_s(administration, \"l+g8o6sU2Qz27e4lc5f/oIS+f9s=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (administration);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbmlzdHJhdGlvbi9bYWRtaW5pc3RyYXRpb25dLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ2tCO0FBQ0o7QUFDb0I7QUFDSDtBQUN6RCxNQUFNTSxpQkFBaUIsSUFBTTs7SUFDNUIsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNRLGdCQUFnQkMsa0JBQWtCLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3JELE1BQU1VLGdCQUFnQixDQUFDQyxVQUFZO1FBQ2xDRixrQkFBa0JFO0lBQ25CO0lBQ0EsTUFBTSxDQUFDQyxtQkFBbUJDLHFCQUFxQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNYyxtQkFBbUIsQ0FBQ0gsVUFBWTtRQUNyQ0UscUJBQXFCRjtJQUN0QjtJQUNBWixnREFBU0EsQ0FBQyxJQUFNO1FBQ2YsTUFBTSxFQUFFSyxlQUFjLEVBQUUsR0FBR0MsT0FBT1UsS0FBSztRQUN2QyxJQUFJWCxnQkFBZ0I7WUFDbkJHLFFBQVFIO1FBQ1QsQ0FBQztJQUNGLEdBQUc7UUFBQ0MsT0FBT1UsS0FBSztLQUFDO0lBQ2pCLHFCQUFxQjtJQUNyQixxQkFDQyw4REFBQ0M7UUFBSUMsV0FBV2Ysb0ZBQWdCO2tCQUMvQiw0RUFBQ2M7WUFBSUMsV0FBV2Ysa0ZBQWM7OzhCQUM3Qiw4REFBQ2M7b0JBQUlDLFdBQVdmLGlGQUFhOzhCQUM1Qiw0RUFBQ21COzswQ0FDQSw4REFBQ0M7Z0NBQ0FMLFdBQVdULG1CQUFtQixnQkFBVU4saUZBQWEsR0FBRyxFQUFFO2dDQUMxRHNCLFNBQVMsSUFBTTtvQ0FDZGQsY0FBYztvQ0FDZEksaUJBQWlCO2dDQUNsQjswQ0FBRzs7Ozs7OzBDQUdKLDhEQUFDUTtnQ0FDQUwsV0FBV1QsbUJBQW1CLGVBQWVOLGlGQUFhLEdBQUcsRUFBRTtnQ0FDL0RzQixTQUFTLElBQU07b0NBQ2RkLGNBQWM7b0NBQ2RJLGlCQUFpQjtnQ0FDbEI7MENBQUc7Ozs7OzswQ0FHSiw4REFBQ1E7Z0NBQ0FMLFdBQVdULG1CQUFtQixxQkFBa0JOLGlGQUFhLEdBQUcsRUFBRTtnQ0FDbEVzQixTQUFTLElBQU07b0NBQ2RkLGNBQWM7b0NBQ2RJLGlCQUFpQjtnQ0FDbEI7MENBQUc7Ozs7OzswQ0FHSiw4REFBQ1E7Z0NBQ0FMLFdBQVdULG1CQUFtQixVQUFVTixpRkFBYSxHQUFHLEVBQUU7Z0NBQzFEc0IsU0FBUyxJQUFNO29DQUNkZCxjQUFjO29DQUNkSSxpQkFBaUI7Z0NBQ2xCOzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFNTE4sbUJBQW1CLCtCQUNuQiw4REFBQ1E7b0JBQUlDLFdBQVdmLGlGQUFhOzhCQUM1Qiw0RUFBQ21COzswQ0FDQSw4REFBQ0M7Z0NBQ0FMLFdBQVdMLHNCQUFzQixhQUFhVixpRkFBYSxHQUFHLEVBQUU7Z0NBQ2hFc0IsU0FBUyxJQUFNO29DQUNkZCxjQUFjO29DQUNkSSxpQkFBaUI7Z0NBQ2xCOzBDQUFHOzs7Ozs7MENBR0osOERBQUNRO2dDQUNBTCxXQUFXTCxzQkFBc0IsYUFBYVYsaUZBQWEsR0FBRyxFQUFFO2dDQUNoRXNCLFNBQVMsSUFBTTtvQ0FDZGQsY0FBYztvQ0FDZEksaUJBQWlCO2dDQUNsQjswQ0FBRzs7Ozs7OzBDQUdKLDhEQUFDUTtnQ0FDQUwsV0FBV0wsc0JBQXNCLGNBQWNWLGlGQUFhLEdBQUcsRUFBRTtnQ0FDakVzQixTQUFTLElBQU07b0NBQ2RkLGNBQWM7b0NBQ2RJLGlCQUFpQjtnQ0FDbEI7MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQU1ORixzQkFBc0IsNEJBQWMsOERBQUNULGdFQUFZQTs7Ozs7Z0JBQ2pEUyxzQkFBc0IsNEJBQWMsOERBQUNhOzhCQUFHOzs7Ozs7Z0JBQ3hDYixzQkFBc0IsNkJBQWUsOERBQUNhOzhCQUFHOzs7Ozs7Z0JBRXpDakIsbUJBQW1CLDhCQUNuQiw4REFBQ1E7b0JBQUlDLFdBQVdmLGlGQUFhOzhCQUM1Qiw0RUFBQ21COzswQ0FDQSw4REFBQ0M7Z0NBQ0FMLFdBQVdMLHNCQUFzQiwwQkFBMEJWLGlGQUFhLEdBQUcsRUFBRTtnQ0FDN0VzQixTQUFTLElBQU1WLGlCQUFpQjswQ0FBMEI7Ozs7OzswQ0FHM0QsOERBQUNRO2dDQUNBTCxXQUFXTCxzQkFBc0IsdUJBQXVCVixpRkFBYSxHQUFHLEVBQUU7Z0NBQzFFc0IsU0FBUyxJQUFNVixpQkFBaUI7MENBQXVCOzs7Ozs7MENBR3hELDhEQUFDUTtnQ0FDQUwsV0FBV0wsc0JBQXNCLDRCQUE0QlYsaUZBQWEsR0FBRyxFQUFFO2dDQUMvRXNCLFNBQVMsSUFBTVYsaUJBQWlCOzBDQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBTS9ERixzQkFBc0IseUNBQTJCLDhEQUFDYzs4QkFBRzs7Ozs7O2dCQUNyRGQsc0JBQXNCLHNDQUF3Qiw4REFBQ2E7OEJBQUc7Ozs7OztnQkFDbERiLHNCQUFzQiwyQ0FBNkIsOERBQUNhOzhCQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RDtHQXZITXJCOztRQUNVSCxrREFBU0E7OztBQXdIekIsK0RBQWVHLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW5pc3RyYXRpb24vW2FkbWluaXN0cmF0aW9uXS5qc3g/NmY5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0FkbWluaXN0cmF0aW9uLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEFqb3V0ZXJFbGV2ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Fqb3V0ZXJFbGV2ZSc7XG5jb25zdCBhZG1pbmlzdHJhdGlvbiA9ICgpID0+IHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IFtwYXRoLCBzZXRQYXRoXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2VsZW1lbnRBZmZpY2hlLCBzZXRFbGVtZW50QWZmaWNoZV0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IGNoYW5nZUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuXHRcdHNldEVsZW1lbnRBZmZpY2hlKGVsZW1lbnQpO1xuXHR9O1xuXHRjb25zdCBbZm9ybXVsYWlyZUFmZmljaGUsIHNldEZvcm11bGFpcmVBZmZpY2hlXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgY2hhbmdlRm9ybXVsYWlyZSA9IChlbGVtZW50KSA9PiB7XG5cdFx0c2V0Rm9ybXVsYWlyZUFmZmljaGUoZWxlbWVudCk7XG5cdH07XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgeyBhZG1pbmlzdHJhdGlvbiB9ID0gcm91dGVyLnF1ZXJ5O1xuXHRcdGlmIChhZG1pbmlzdHJhdGlvbikge1xuXHRcdFx0c2V0UGF0aChhZG1pbmlzdHJhdGlvbik7XG5cdFx0fVxuXHR9LCBbcm91dGVyLnF1ZXJ5XSk7XG5cdC8vIGNvbnNvbGUubG9nKHBhdGgpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW50ZXRlfT5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtlbGVtZW50QWZmaWNoZSA9PT0gJ8OJbMOodmUnID8gc3R5bGVzLmFjdGl2ZSA6ICcnfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlRWxlbWVudCgnw4lsw6h2ZScpO1xuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZUZvcm11bGFpcmUoJycpO1xuXHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0w4lsw6h2ZVxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2VsZW1lbnRBZmZpY2hlID09PSAnUHJvZmVzc2V1cicgPyBzdHlsZXMuYWN0aXZlIDogJyd9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VFbGVtZW50KCdQcm9mZXNzZXVyJyk7XG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlRm9ybXVsYWlyZSgnJyk7XG5cdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRQcm9mZXNzZXVyXG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ZWxlbWVudEFmZmljaGUgPT09ICfDiXRhYmxpc3NlbWVudCcgPyBzdHlsZXMuYWN0aXZlIDogJyd9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VFbGVtZW50KCfDiXRhYmxpc3NlbWVudCcpO1xuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZUZvcm11bGFpcmUoJycpO1xuXHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0w4l0YWJsaXNzZW1lbnRcblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtlbGVtZW50QWZmaWNoZSA9PT0gJ1ZpbGxlJyA/IHN0eWxlcy5hY3RpdmUgOiAnJ31cblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZUVsZW1lbnQoJ1ZpbGxlJyk7XG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlRm9ybXVsYWlyZSgnJyk7XG5cdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRWaWxsZVxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHR7ZWxlbWVudEFmZmljaGUgPT09ICfDiWzDqHZlJyAmJiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbnRldGV9PlxuXHRcdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Zvcm11bGFpcmVBZmZpY2hlID09PSAnSW5zY3JpcmUnID8gc3R5bGVzLmFjdGl2ZSA6ICcnfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUVsZW1lbnQoJycpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlRm9ybXVsYWlyZSgnSW5zY3JpcmUnKTtcblx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRJbnNjcmlyZVxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Zvcm11bGFpcmVBZmZpY2hlID09PSAnTW9kaWZpZXInID8gc3R5bGVzLmFjdGl2ZSA6ICcnfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUVsZW1lbnQoJycpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlRm9ybXVsYWlyZSgnTW9kaWZpZXInKTtcblx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRNb2RpZmllclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Zvcm11bGFpcmVBZmZpY2hlID09PSAnU3VwcHJpbWVyJyA/IHN0eWxlcy5hY3RpdmUgOiAnJ31cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VFbGVtZW50KCcnKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUZvcm11bGFpcmUoJ1N1cHByaW1lcicpO1xuXHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFN1cHByaW1lclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0e2Zvcm11bGFpcmVBZmZpY2hlID09PSAnSW5zY3JpcmUnICYmIDxBam91dGVyRWxldmUgLz59XG5cdFx0XHRcdHtmb3JtdWxhaXJlQWZmaWNoZSA9PT0gJ01vZGlmaWVyJyAmJiA8aDI+TW9kaWZpZXIgbGVzIGluZm9ybWF0aW9ucyBkJ3VuIGVsZXZlPC9oMj59XG5cdFx0XHRcdHtmb3JtdWxhaXJlQWZmaWNoZSA9PT0gJ1N1cHByaW1lcicgJiYgPGgyPlN1cHByaW1lciB1biBlbGV2ZTwvaDI+fVxuXG5cdFx0XHRcdHtlbGVtZW50QWZmaWNoZSA9PT0gJ1Byb2Zlc3NldXInICYmIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVudGV0ZX0+XG5cdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdDxsaVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Zm9ybXVsYWlyZUFmZmljaGUgPT09ICdBam91dGVyIHVuIHByb2Zlc3NldXInID8gc3R5bGVzLmFjdGl2ZSA6ICcnfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGNoYW5nZUZvcm11bGFpcmUoJ0Fqb3V0ZXIgdW4gcHJvZmVzc2V1cicpfT5cblx0XHRcdFx0XHRcdFx0XHRBam91dGVyIHVuIHByb2Zlc3NldXJcblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtmb3JtdWxhaXJlQWZmaWNoZSA9PT0gJ01vZGlmaWVyIGxlcyBpbmZvcycgPyBzdHlsZXMuYWN0aXZlIDogJyd9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gY2hhbmdlRm9ybXVsYWlyZSgnTW9kaWZpZXIgbGVzIGluZm9zJyl9PlxuXHRcdFx0XHRcdFx0XHRcdE1vZGlmaWVyIGxlcyBpbmZvc1xuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Zvcm11bGFpcmVBZmZpY2hlID09PSAnU3VwcHJpbWVyIHVuIHByb2Zlc3NldXInID8gc3R5bGVzLmFjdGl2ZSA6ICcnfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGNoYW5nZUZvcm11bGFpcmUoJ1N1cHByaW1lciB1biBwcm9mZXNzZXVyJyl9PlxuXHRcdFx0XHRcdFx0XHRcdFN1cHByaW1lciB1biBwcm9mZXNzZXVyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHR7Zm9ybXVsYWlyZUFmZmljaGUgPT09ICdBam91dGVyIHVuIHByb2Zlc3NldXInICYmIDxoMT5Bam91dGVyIHVuIHByb2Zlc3NldXI8L2gxPn1cblx0XHRcdFx0e2Zvcm11bGFpcmVBZmZpY2hlID09PSAnTW9kaWZpZXIgbGVzIGluZm9zJyAmJiA8aDI+TW9kaWZpZXIgbGVzIGluZm9zPC9oMj59XG5cdFx0XHRcdHtmb3JtdWxhaXJlQWZmaWNoZSA9PT0gJ1N1cHByaW1lciB1biBwcm9mZXNzZXVyJyAmJiA8aDI+U3VwcHJpbWVyIHVuIHByb2Zlc3NldXI8L2gyPn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRtaW5pc3RyYXRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInN0eWxlcyIsIkFqb3V0ZXJFbGV2ZSIsImFkbWluaXN0cmF0aW9uIiwicm91dGVyIiwicGF0aCIsInNldFBhdGgiLCJlbGVtZW50QWZmaWNoZSIsInNldEVsZW1lbnRBZmZpY2hlIiwiY2hhbmdlRWxlbWVudCIsImVsZW1lbnQiLCJmb3JtdWxhaXJlQWZmaWNoZSIsInNldEZvcm11bGFpcmVBZmZpY2hlIiwiY2hhbmdlRm9ybXVsYWlyZSIsInF1ZXJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiY29udGVudSIsImVudGV0ZSIsInVsIiwibGkiLCJhY3RpdmUiLCJvbkNsaWNrIiwiaDIiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/administration/[administration].jsx\n"));

/***/ })

});