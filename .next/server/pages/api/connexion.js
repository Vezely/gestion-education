"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/connexion";
exports.ids = ["pages/api/connexion"];
exports.modules = {

/***/ "(api)/./pages/api/connexion.js":
/*!********************************!*\
  !*** ./pages/api/connexion.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(request, response) {\n    if (request.method === \"POST\") {\n        // const nom_eleve = request.body.nom_eleve;\n        console.log(request.body.mot_de_passe);\n        try {\n            if (request.body.mot_de_passe === process.env.MOT_DE_PASSE_ADMIN) {\n                response.status(200).json();\n            } else {\n                response.status(401).end();\n            }\n        } catch (error) {\n            response.status(500).json({\n                error: \"Une erreur est survenue lors de la r\\xe9cup\\xe9ration letablissement.\"\n            });\n        }\n    } else {\n        response.status(405).json({\n            error: \"M\\xe9thode non autoris\\xe9e.\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29ubmV4aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxRQUFRQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUN4RCxJQUFJRCxRQUFRRSxNQUFNLEtBQUssUUFBUTtRQUM5Qiw0Q0FBNEM7UUFDNUNDLFFBQVFDLEdBQUcsQ0FBQ0osUUFBUUssSUFBSSxDQUFDQyxZQUFZO1FBQ3JDLElBQUk7WUFDSCxJQUFJTixRQUFRSyxJQUFJLENBQUNDLFlBQVksS0FBS0MsUUFBUUMsR0FBRyxDQUFDQyxrQkFBa0IsRUFBRTtnQkFDakVSLFNBQVNTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJO1lBQzFCLE9BQU87Z0JBQ05WLFNBQVNTLE1BQU0sQ0FBQyxLQUFLRSxHQUFHO1lBQ3pCLENBQUM7UUFDRixFQUFFLE9BQU9DLE9BQU87WUFDZlosU0FBU1MsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUUsT0FBTztZQUFrRTtRQUN0RztJQUNELE9BQU87UUFDTlosU0FBU1MsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRSxPQUFPO1FBQXlCO0lBQzdELENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VzdGlvbi1lbGV2ZS8uL3BhZ2VzL2FwaS9jb25uZXhpb24uanM/OTE0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG5cdGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG5cdFx0Ly8gY29uc3Qgbm9tX2VsZXZlID0gcmVxdWVzdC5ib2R5Lm5vbV9lbGV2ZTtcblx0XHRjb25zb2xlLmxvZyhyZXF1ZXN0LmJvZHkubW90X2RlX3Bhc3NlKTtcblx0XHR0cnkge1xuXHRcdFx0aWYgKHJlcXVlc3QuYm9keS5tb3RfZGVfcGFzc2UgPT09IHByb2Nlc3MuZW52Lk1PVF9ERV9QQVNTRV9BRE1JTikge1xuXHRcdFx0XHRyZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNwb25zZS5zdGF0dXMoNDAxKS5lbmQoKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmVzcG9uc2Uuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBsZXRhYmxpc3NlbWVudC4nIH0pO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXNwb25zZS5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNw6l0aG9kZSBub24gYXV0b3Jpc8OpZS4nIH0pO1xuXHR9XG59XG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcXVlc3QiLCJyZXNwb25zZSIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwibW90X2RlX3Bhc3NlIiwicHJvY2VzcyIsImVudiIsIk1PVF9ERV9QQVNTRV9BRE1JTiIsInN0YXR1cyIsImpzb24iLCJlbmQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/connexion.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/connexion.js"));
module.exports = __webpack_exports__;

})();