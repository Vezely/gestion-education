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
exports.id = "pages/api/communes";
exports.ids = ["pages/api/communes"];
exports.modules = {

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ "(api)/./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"executeQuery\": () => (/* binding */ executeQuery)\n/* harmony export */ });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n\n// Configurer les informations de connexion\nconst connection = mysql__WEBPACK_IMPORTED_MODULE_0__.createConnection({\n    host: \"localhost\",\n    user: \"root\",\n    password: \"gestion_ecole2023\",\n    database: \"gestion_ecole\"\n});\n// Fonction pour exécuter une requête à la base de données\nfunction executeQuery(query, params = []) {\n    return new Promise((resolve, reject)=>{\n        connection.query(query, params, (error, results)=>{\n            if (error) {\n                reject(error);\n            } else {\n                resolve(results);\n            }\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQUUxQiwyQ0FBMkM7QUFDM0MsTUFBTUMsYUFBYUQsbURBQXNCLENBQUM7SUFDekNHLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxVQUFVO0lBQ1ZDLFVBQVU7QUFDWDtBQUVBLDBEQUEwRDtBQUNuRCxTQUFTQyxhQUFhQyxLQUFLLEVBQUVDLFNBQVMsRUFBRSxFQUFFO0lBQ2hELE9BQU8sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1FBQ3ZDWCxXQUFXTyxLQUFLLENBQUNBLE9BQU9DLFFBQVEsQ0FBQ0ksT0FBT0MsVUFBWTtZQUNuRCxJQUFJRCxPQUFPO2dCQUNWRCxPQUFPQztZQUNSLE9BQU87Z0JBQ05GLFFBQVFHO1lBQ1QsQ0FBQztRQUNGO0lBQ0Q7QUFDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VzdGlvbi1lbGV2ZS8uL2RiLmpzPzU2NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15c3FsIGZyb20gJ215c3FsJztcblxuLy8gQ29uZmlndXJlciBsZXMgaW5mb3JtYXRpb25zIGRlIGNvbm5leGlvblxuY29uc3QgY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xuXHRob3N0OiAnbG9jYWxob3N0Jyxcblx0dXNlcjogJ3Jvb3QnLFxuXHRwYXNzd29yZDogJ2dlc3Rpb25fZWNvbGUyMDIzJyxcblx0ZGF0YWJhc2U6ICdnZXN0aW9uX2Vjb2xlJyxcbn0pO1xuXG4vLyBGb25jdGlvbiBwb3VyIGV4w6ljdXRlciB1bmUgcmVxdcOqdGUgw6AgbGEgYmFzZSBkZSBkb25uw6llc1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVRdWVyeShxdWVyeSwgcGFyYW1zID0gW10pIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRjb25uZWN0aW9uLnF1ZXJ5KHF1ZXJ5LCBwYXJhbXMsIChlcnJvciwgcmVzdWx0cykgPT4ge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNvbHZlKHJlc3VsdHMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cbiJdLCJuYW1lcyI6WyJteXNxbCIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwiZXhlY3V0ZVF1ZXJ5IiwicXVlcnkiLCJwYXJhbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVycm9yIiwicmVzdWx0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db.js\n");

/***/ }),

/***/ "(api)/./pages/api/communes.js":
/*!*******************************!*\
  !*** ./pages/api/communes.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _queries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../queries.js */ \"(api)/./queries.js\");\n\nasync function handler(request, response) {\n    if (request.method === \"GET\") {\n        console.log(request.query);\n        const nom_region = request.query.nom_region || \"\";\n        try {\n            const communes = await (0,_queries_js__WEBPACK_IMPORTED_MODULE_0__.getAllCommunes)(nom_region);\n            response.status(200).json(communes);\n        } catch (error) {\n            response.status(500).json({\n                error: \"Une erreur est survenue lors de la r\\xe9cup\\xe9ration des eleves.\"\n            });\n        }\n    } else {\n        response.status(405).json({\n            error: \"M\\xe9thode non autoris\\xe9e.\"\n        });\n    }\n} // nom_region.charAt(0).toUpperCase() + nom_region.slice(1);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbXVuZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0Q7QUFDbkMsZUFBZUMsUUFBUUMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFDeEQsSUFBSUQsUUFBUUUsTUFBTSxLQUFLLE9BQU87UUFDN0JDLFFBQVFDLEdBQUcsQ0FBQ0osUUFBUUssS0FBSztRQUN6QixNQUFNQyxhQUFhTixRQUFRSyxLQUFLLENBQUNDLFVBQVUsSUFBSTtRQUUvQyxJQUFJO1lBQ0gsTUFBTUMsV0FBVyxNQUFNVCwyREFBY0EsQ0FBQ1E7WUFDdENMLFNBQVNPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNGO1FBQzNCLEVBQUUsT0FBT0csT0FBTztZQUNmVCxTQUFTTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQThEO1FBQ2xHO0lBQ0QsT0FBTztRQUNOVCxTQUFTTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBeUI7SUFDN0QsQ0FBQztBQUNGLENBQUMsQ0FDRCw0REFBNEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZXN0aW9uLWVsZXZlLy4vcGFnZXMvYXBpL2NvbW11bmVzLmpzPzUyMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWxsQ29tbXVuZXMgfSBmcm9tICcuLi8uLi9xdWVyaWVzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxdWVzdCwgcmVzcG9uc2UpIHtcblx0aWYgKHJlcXVlc3QubWV0aG9kID09PSAnR0VUJykge1xuXHRcdGNvbnNvbGUubG9nKHJlcXVlc3QucXVlcnkpO1xuXHRcdGNvbnN0IG5vbV9yZWdpb24gPSByZXF1ZXN0LnF1ZXJ5Lm5vbV9yZWdpb24gfHwgJyc7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgY29tbXVuZXMgPSBhd2FpdCBnZXRBbGxDb21tdW5lcyhub21fcmVnaW9uKTtcblx0XHRcdHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oY29tbXVuZXMpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZXNwb25zZS5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyBlbGV2ZXMuJyB9KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzcG9uc2Uuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTcOpdGhvZGUgbm9uIGF1dG9yaXPDqWUuJyB9KTtcblx0fVxufVxuLy8gbm9tX3JlZ2lvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5vbV9yZWdpb24uc2xpY2UoMSk7XG4iXSwibmFtZXMiOlsiZ2V0QWxsQ29tbXVuZXMiLCJoYW5kbGVyIiwicmVxdWVzdCIsInJlc3BvbnNlIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5Iiwibm9tX3JlZ2lvbiIsImNvbW11bmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/communes.js\n");

/***/ }),

/***/ "(api)/./queries.js":
/*!********************!*\
  !*** ./queries.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ajouterEleve\": () => (/* binding */ ajouterEleve),\n/* harmony export */   \"chercheeEleve\": () => (/* binding */ chercheeEleve),\n/* harmony export */   \"getAllCommunes\": () => (/* binding */ getAllCommunes),\n/* harmony export */   \"getAllEtablissementsParCommune\": () => (/* binding */ getAllEtablissementsParCommune),\n/* harmony export */   \"getAllRegions\": () => (/* binding */ getAllRegions),\n/* harmony export */   \"getClasseParEtablissement\": () => (/* binding */ getClasseParEtablissement),\n/* harmony export */   \"getCommuneByName\": () => (/* binding */ getCommuneByName),\n/* harmony export */   \"getEleve\": () => (/* binding */ getEleve),\n/* harmony export */   \"getElevesParClasse\": () => (/* binding */ getElevesParClasse),\n/* harmony export */   \"getEtablissementsParCommune\": () => (/* binding */ getEtablissementsParCommune)\n/* harmony export */ });\n/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db.js */ \"(api)/./db.js\");\n\nconst getAllRegions = async (nomRegion)=>{\n    let query = `\n    select r.id_region, r.nom_region, r.description, r.width, r.height , r.region_img, count(distinct c.nom_commune) as nb_communes, count(distinct e.nom_etablissement ) as nb_etablissements from region r\n    left join commune c on c.id_region=r.id_region\n    left join etablissement e on e.id_commune= c.id_commune\n    group by r.id_region, r.nom_region, r.description, r.width, r.height , r.region_img;\n    `;\n    const params = [];\n    if (nomRegion) {\n        query = `\n        select r.id_region, r.nom_region, r.description, r.width, r.height , r.region_img, count(distinct c.nom_commune) as nb_communes, count(distinct e.nom_etablissement ) as nb_etablissements from region r\n        left join commune c on c.id_region=r.id_region\n        left join etablissement e on e.id_commune= c.id_commune\n        WHERE nom_region LIKE ?\n        group by r.id_region, r.nom_region, r.description, r.width, r.height , r.region_img;\n      `;\n        params.push(`%${nomRegion}%`);\n    }\n    try {\n        const results = await (0,_db_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(query, params);\n        return results;\n    } catch (error) {\n        console.error(\"Erreur lors de l'ex\\xe9cution de la requ\\xeate :\", error);\n        throw error;\n    }\n};\nconst getAllCommunes = async (nom_region, nomCommune)=>{\n    let query = `\n    SELECT distinct c.nom_commune, c.description, COUNT(DISTINCT et.nom_etablissement) AS nombre_ecoles, COUNT(el.id_eleve) AS nombre_eleves, c.commune_img, c.width, c.height, c.id_commune, r.nom_region\n    FROM commune c\n    LEFT JOIN etablissement et ON et.id_commune = c.id_commune\n    LEFT JOIN eleve el ON el.id_etablissement = et.id_etablissement\n    left join region r on r.id_region= c.id_region\n    where r.nom_region = ?\n    GROUP BY c.nom_commune, c.description, c.commune_img, c.width, c.height, c.id_commune\n    order by COUNT(DISTINCT et.nom_etablissement) desc;\n    `;\n    const params = [\n        nom_region\n    ];\n    if (nomCommune) {\n        query = `\n        SELECT distinct c.nom_commune, c.description, COUNT(DISTINCT et.nom_etablissement) AS nombre_ecoles, COUNT(el.id_eleve) AS nombre_eleves, c.commune_img, c.width, c.height, c.id_commune, r.nom_region\n        FROM commune c\n        LEFT JOIN etablissement et ON et.id_commune = c.id_commune\n        LEFT JOIN eleve el ON el.id_etablissement = et.id_etablissement\n        left join region r on r.id_region= c.id_region\n        where r.nom_region = ? AND c.nom_commune LIKE ?\n        GROUP BY c.nom_commune, c.description, c.commune_img, c.width, c.height, c.id_commune\n        order by COUNT(DISTINCT et.nom_etablissement) desc;\n      `;\n        params.push(`%${nomCommune}%`);\n    }\n    try {\n        const results = await (0,_db_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(query, params);\n        return results;\n    } catch (error) {\n        console.error(\"Erreur lors de l'ex\\xe9cution de la requ\\xeate :\", error);\n        throw error;\n    }\n};\nconst getCommuneByName = async (nom_commune)=>{\n    const query = `\n      SELECT * FROM commune WHERE nom_commune = ?;\n    `;\n    try {\n        const results = await (0,_db_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(query, [\n            nom_commune\n        ]);\n        return results;\n    } catch (error) {\n        console.error(\"Erreur lors de l'ex\\xe9cution de la requ\\xeate :\", error);\n        throw error;\n    }\n};\nconst getAllEtablissementsParCommune = async (nom_commune)=>{\n    const query = `\n    SELECT c.nom_commune, e.nom_etablissement, e.id_etablissement, e.adresse, COUNT(el.id_eleve) AS nombre_eleves, t.nom_type\n        FROM commune c\n        JOIN etablissement e ON e.id_commune = c.id_commune\n        LEFT JOIN eleve el ON el.id_etablissement = e.id_etablissement\n        LEFT JOIN type_etablissement t ON t.id_type = e.id_type\n        WHERE c.nom_commune = ?\n        GROUP BY c.nom_commune, e.nom_etablissement, e.id_etablissement, e.adresse, t.nom_type; \n    `;\n    try {\n        const results = await (0,_db_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(query, [\n            nom_commune\n        ]);\n        return results;\n    } catch (error) {\n        console.error(\"Erreur lors de l'ex\\xe9cution de la requ\\xeate :\", error);\n        throw error;\n    }\n};\nconst getEtablissementsParCommune = async (nom_commune, nom_etablissement)=>{\n    let query = `\n      SELECT c.nom_commune, e.nom_etablissement, e.id_etablissement, e.adresse, COUNT(el.id_eleve) AS nombre_eleves, t.nom_type\n      FROM commune c\n      JOIN etablissement e ON e.id_commune = c.id_commune\n      LEFT JOIN eleve el ON el.id_etablissement = e.id_etablissement\n      LEFT JOIN type_etablissement t ON t.id_type = e.id_type\n      WHERE c.nom_commune = ?\n    `;\n    try {\n        const params = [\n            nom_commune\n        ];\n        if (nom_etablissement) {\n            query += ` AND e.nom_etablissement LIKE ?`;\n            params.push(`%${nom_etablissement}%`);\n        }\n        query += ` GROUP BY c.nom_commune, e.nom_etablissement, e.id_etablissement`;\n        const results = await (0,_db_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(query, params);\n        return results;\n    } catch (error) {\n        console.error(\"Erreur lors de l'ex\\xe9cution de la requ\\xeate :\", error);\n        throw error;\n    }\n};\nconst getClasseParEtablissement = async (nom_etablissement)=>{\n    const query = `\n    SELECT cl.nom, cl.niveau, cl.id_classe\n\t\t\tFROM classe cl\n\t\t\tWHERE cl.id_classe IN (\n\t\t\t\tSELECT el.id_classe\n\t\t\t\tFROM eleve el\n\t\t\t\tJOIN etablissement et ON el.id_etablissement = et.id_etablissement\n\t\t\t\tWHERE et.nom_etablissement = ?\n\t\t);\n    `;\n    try {\n        const results = await (0,_db_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(query, [\n            nom_etablissement\n        ]);\n        return results;\n    } catch (error) {\n        console.error(\"Erreur lors de l'ex\\xe9cution de la requ\\xeate :\", error);\n        throw error;\n    }\n};\nconst getElevesParClasse = async (nom_etablissement, nom_classe)=>{\n    const query = `\n    SELECT el.nom, el.prenom, el.date_naissance, el.lieu_naissance, el.sexe, el.telephone, c.nom AS nom_classe, c.niveau, el.id_eleve\n        FROM eleve el\n        JOIN classe c ON el.id_classe = c.id_classe\n        JOIN etablissement et ON el.id_etablissement = et.id_etablissement\n        WHERE et.nom_etablissement = ?\n        AND c.nom = ?;\n    `;\n    try {\n        const results = await (0,_db_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(query, [\n            nom_etablissement,\n            nom_classe\n        ]);\n        return results;\n    } catch (error) {\n        console.error(\"Erreur lors de l'ex\\xe9cution de la requ\\xeate :\", error);\n        throw error;\n    }\n};\nconst getEleve = async (id_eleve)=>{\n    const query = `\n    SELECT el.nom, el.prenom, el.telephone, el.sexe, el.lieu_naissance, el.id_eleve, el.date_naissance, el.eleve_img, el.width, el.height, el.commentaire, et.nom_etablissement, co.nom_commune, cl.nom AS nom_classe\n        FROM eleve el\n        JOIN etablissement et ON el.id_etablissement = et.id_etablissement\n        JOIN commune  co  ON el.id_commune = co.id_commune\n        JOIN classe cl ON  el.id_classe = cl.id_classe\n        WHERE el.id_eleve = ?;\n    `;\n    try {\n        const results = await (0,_db_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(query, [\n            id_eleve\n        ]);\n        return results;\n    } catch (error) {\n        console.error(\"Erreur lors de l'ex\\xe9cution de la requ\\xeate :\", error);\n        throw error;\n    }\n};\nconst chercheeEleve = async (nom, prenom, id_eleve)=>{\n    const query = `\n    SELECT el.nom, el.prenom, el.telephone, el.sexe, el.lieu_naissance, el.id_eleve, el.date_naissance, et.nom_etablissement, co.nom_commune, cl.nom AS nom_classe\n        FROM eleve el\n        JOIN etablissement et ON el.id_etablissement = et.id_etablissement\n        JOIN commune  co  ON el.id_commune = co.id_commune\n        JOIN classe cl ON  el.id_classe = cl.id_classe\n        WHERE el.nom LIKE ?\n        OR el.prenom LIKE ?\n        OR el.id_eleve = ?;\n    `;\n    try {\n        const results = await (0,_db_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(query, [\n            `%${nom}%`,\n            `%${prenom}%`,\n            id_eleve\n        ]);\n        return results;\n    } catch (error) {\n        console.error(\"Erreur lors de l'ex\\xe9cution de la requ\\xeate :\", error);\n        throw error;\n    }\n};\nconst ajouterEleve = async (nom, prenom, date_naissance, lieu_naissance, sexe, telephone, id_classe, id_commune, id_etablissement, commentaire, eleve_img, width, height)=>{\n    try {\n        const query = `\n        INSERT INTO eleve (nom, prenom, date_naissance, lieu_naissance, sexe, telephone, id_classe, id_commune, id_etablissement,commentaire, eleve_img, width,height)\n        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)\n      `;\n        const values = [\n            nom,\n            prenom,\n            date_naissance,\n            lieu_naissance,\n            sexe,\n            telephone,\n            id_classe,\n            id_commune,\n            id_etablissement,\n            commentaire,\n            eleve_img,\n            width,\n            height\n        ];\n        const result = await (0,_db_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(query, values);\n        const idEleve = result.insertId;\n        return {\n            id: idEleve,\n            nom,\n            prenom,\n            date_naissance,\n            lieu_naissance,\n            sexe,\n            telephone,\n            id_classe,\n            id_commune,\n            id_etablissement,\n            commentaire,\n            eleve_img,\n            width,\n            height\n        };\n    } catch (error) {\n        throw error;\n    }\n};\n// async function chercheeEleve(nom, prenom) {\n// \ttry {\n// \t\tconst db = await openDatabase();\n// \t\tconst eleve = await db.all(\n// \t\t\t`\n// \t\t\tSELECT el.nom, el.prenom, el.telephone, el.sexe, el.lieu_naissance, el.id_eleve, el.date_naissance, et.nom_etablissement, co.nom_commune, cl.nom AS nom_classe\n// \t\t\t\tFROM eleve el\n// \t\t\t\tJOIN etablissement et ON el.id_etablissement = et.id_etablissement\n// \t\t\t\tJOIN commune  co  ON el.id_commune = co.id_commune\n// \t\t\t\tJOIN classe cl ON  el.id_classe = cl.id_classe\n// \t\t\t\tWHERE el.nom = ?\n// \t\t\t\tOR el.prenom = ?;`,\n// \t\t\t[nom, prenom],\n// \t\t);\n// \t\treturn eleve;\n// \t} catch (error) {\n// \t\tconsole.log(error);\n// \t}\n// }\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxRQUFRLENBQUM7OztNQUdYLENBQUM7UUFFTCxNQUFNa0MsU0FBUztZQUNkZDtZQUNBQztZQUNBRTtZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztTQUNBO1FBRUQsTUFBTUUsU0FBUyxNQUFNdEMsb0RBQVlBLENBQUNHLE9BQU9rQztRQUV6QyxNQUFNRSxVQUFVRCxPQUFPRSxRQUFRO1FBRS9CLE9BQU87WUFDTkMsSUFBSUY7WUFDSmhCO1lBQ0FDO1lBQ0FFO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1FBQ0Q7SUFDRCxFQUFFLE9BQU83QixPQUFPO1FBQ2YsTUFBTUEsTUFBTTtJQUNiO0FBQ0Q7QUFFQSw4Q0FBOEM7QUFDOUMsU0FBUztBQUNULHFDQUFxQztBQUNyQyxnQ0FBZ0M7QUFDaEMsT0FBTztBQUNQLG9LQUFvSztBQUNwSyxvQkFBb0I7QUFDcEIseUVBQXlFO0FBQ3pFLHlEQUF5RDtBQUN6RCxxREFBcUQ7QUFDckQsdUJBQXVCO0FBQ3ZCLDBCQUEwQjtBQUMxQixvQkFBb0I7QUFDcEIsT0FBTztBQUNQLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckIsd0JBQXdCO0FBQ3hCLEtBQUs7QUFDTCxJQUFJO0FBWUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZXN0aW9uLWVsZXZlLy4vcXVlcmllcy5qcz9mYzBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4ZWN1dGVRdWVyeSB9IGZyb20gJy4vZGIuanMnO1xuXG5jb25zdCBnZXRBbGxSZWdpb25zID0gYXN5bmMgKG5vbVJlZ2lvbikgPT4ge1xuXHRsZXQgcXVlcnkgPSBgXG4gICAgc2VsZWN0IHIuaWRfcmVnaW9uLCByLm5vbV9yZWdpb24sIHIuZGVzY3JpcHRpb24sIHIud2lkdGgsIHIuaGVpZ2h0ICwgci5yZWdpb25faW1nLCBjb3VudChkaXN0aW5jdCBjLm5vbV9jb21tdW5lKSBhcyBuYl9jb21tdW5lcywgY291bnQoZGlzdGluY3QgZS5ub21fZXRhYmxpc3NlbWVudCApIGFzIG5iX2V0YWJsaXNzZW1lbnRzIGZyb20gcmVnaW9uIHJcbiAgICBsZWZ0IGpvaW4gY29tbXVuZSBjIG9uIGMuaWRfcmVnaW9uPXIuaWRfcmVnaW9uXG4gICAgbGVmdCBqb2luIGV0YWJsaXNzZW1lbnQgZSBvbiBlLmlkX2NvbW11bmU9IGMuaWRfY29tbXVuZVxuICAgIGdyb3VwIGJ5IHIuaWRfcmVnaW9uLCByLm5vbV9yZWdpb24sIHIuZGVzY3JpcHRpb24sIHIud2lkdGgsIHIuaGVpZ2h0ICwgci5yZWdpb25faW1nO1xuICAgIGA7XG5cblx0Y29uc3QgcGFyYW1zID0gW107XG5cdGlmIChub21SZWdpb24pIHtcblx0XHRxdWVyeSA9IGBcbiAgICAgICAgc2VsZWN0IHIuaWRfcmVnaW9uLCByLm5vbV9yZWdpb24sIHIuZGVzY3JpcHRpb24sIHIud2lkdGgsIHIuaGVpZ2h0ICwgci5yZWdpb25faW1nLCBjb3VudChkaXN0aW5jdCBjLm5vbV9jb21tdW5lKSBhcyBuYl9jb21tdW5lcywgY291bnQoZGlzdGluY3QgZS5ub21fZXRhYmxpc3NlbWVudCApIGFzIG5iX2V0YWJsaXNzZW1lbnRzIGZyb20gcmVnaW9uIHJcbiAgICAgICAgbGVmdCBqb2luIGNvbW11bmUgYyBvbiBjLmlkX3JlZ2lvbj1yLmlkX3JlZ2lvblxuICAgICAgICBsZWZ0IGpvaW4gZXRhYmxpc3NlbWVudCBlIG9uIGUuaWRfY29tbXVuZT0gYy5pZF9jb21tdW5lXG4gICAgICAgIFdIRVJFIG5vbV9yZWdpb24gTElLRSA/XG4gICAgICAgIGdyb3VwIGJ5IHIuaWRfcmVnaW9uLCByLm5vbV9yZWdpb24sIHIuZGVzY3JpcHRpb24sIHIud2lkdGgsIHIuaGVpZ2h0ICwgci5yZWdpb25faW1nO1xuICAgICAgYDtcblx0XHRwYXJhbXMucHVzaChgJSR7bm9tUmVnaW9ufSVgKTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IGV4ZWN1dGVRdWVyeShxdWVyeSwgcGFyYW1zKTtcblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdleMOpY3V0aW9uIGRlIGxhIHJlcXXDqnRlIDpcIiwgZXJyb3IpO1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG59O1xuY29uc3QgZ2V0QWxsQ29tbXVuZXMgPSBhc3luYyAobm9tX3JlZ2lvbiwgbm9tQ29tbXVuZSkgPT4ge1xuXHRsZXQgcXVlcnkgPSBgXG4gICAgU0VMRUNUIGRpc3RpbmN0IGMubm9tX2NvbW11bmUsIGMuZGVzY3JpcHRpb24sIENPVU5UKERJU1RJTkNUIGV0Lm5vbV9ldGFibGlzc2VtZW50KSBBUyBub21icmVfZWNvbGVzLCBDT1VOVChlbC5pZF9lbGV2ZSkgQVMgbm9tYnJlX2VsZXZlcywgYy5jb21tdW5lX2ltZywgYy53aWR0aCwgYy5oZWlnaHQsIGMuaWRfY29tbXVuZSwgci5ub21fcmVnaW9uXG4gICAgRlJPTSBjb21tdW5lIGNcbiAgICBMRUZUIEpPSU4gZXRhYmxpc3NlbWVudCBldCBPTiBldC5pZF9jb21tdW5lID0gYy5pZF9jb21tdW5lXG4gICAgTEVGVCBKT0lOIGVsZXZlIGVsIE9OIGVsLmlkX2V0YWJsaXNzZW1lbnQgPSBldC5pZF9ldGFibGlzc2VtZW50XG4gICAgbGVmdCBqb2luIHJlZ2lvbiByIG9uIHIuaWRfcmVnaW9uPSBjLmlkX3JlZ2lvblxuICAgIHdoZXJlIHIubm9tX3JlZ2lvbiA9ID9cbiAgICBHUk9VUCBCWSBjLm5vbV9jb21tdW5lLCBjLmRlc2NyaXB0aW9uLCBjLmNvbW11bmVfaW1nLCBjLndpZHRoLCBjLmhlaWdodCwgYy5pZF9jb21tdW5lXG4gICAgb3JkZXIgYnkgQ09VTlQoRElTVElOQ1QgZXQubm9tX2V0YWJsaXNzZW1lbnQpIGRlc2M7XG4gICAgYDtcblxuXHRjb25zdCBwYXJhbXMgPSBbbm9tX3JlZ2lvbl07XG5cdGlmIChub21Db21tdW5lKSB7XG5cdFx0cXVlcnkgPSBgXG4gICAgICAgIFNFTEVDVCBkaXN0aW5jdCBjLm5vbV9jb21tdW5lLCBjLmRlc2NyaXB0aW9uLCBDT1VOVChESVNUSU5DVCBldC5ub21fZXRhYmxpc3NlbWVudCkgQVMgbm9tYnJlX2Vjb2xlcywgQ09VTlQoZWwuaWRfZWxldmUpIEFTIG5vbWJyZV9lbGV2ZXMsIGMuY29tbXVuZV9pbWcsIGMud2lkdGgsIGMuaGVpZ2h0LCBjLmlkX2NvbW11bmUsIHIubm9tX3JlZ2lvblxuICAgICAgICBGUk9NIGNvbW11bmUgY1xuICAgICAgICBMRUZUIEpPSU4gZXRhYmxpc3NlbWVudCBldCBPTiBldC5pZF9jb21tdW5lID0gYy5pZF9jb21tdW5lXG4gICAgICAgIExFRlQgSk9JTiBlbGV2ZSBlbCBPTiBlbC5pZF9ldGFibGlzc2VtZW50ID0gZXQuaWRfZXRhYmxpc3NlbWVudFxuICAgICAgICBsZWZ0IGpvaW4gcmVnaW9uIHIgb24gci5pZF9yZWdpb249IGMuaWRfcmVnaW9uXG4gICAgICAgIHdoZXJlIHIubm9tX3JlZ2lvbiA9ID8gQU5EIGMubm9tX2NvbW11bmUgTElLRSA/XG4gICAgICAgIEdST1VQIEJZIGMubm9tX2NvbW11bmUsIGMuZGVzY3JpcHRpb24sIGMuY29tbXVuZV9pbWcsIGMud2lkdGgsIGMuaGVpZ2h0LCBjLmlkX2NvbW11bmVcbiAgICAgICAgb3JkZXIgYnkgQ09VTlQoRElTVElOQ1QgZXQubm9tX2V0YWJsaXNzZW1lbnQpIGRlc2M7XG4gICAgICBgO1xuXHRcdHBhcmFtcy5wdXNoKGAlJHtub21Db21tdW5lfSVgKTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IGV4ZWN1dGVRdWVyeShxdWVyeSwgcGFyYW1zKTtcblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdleMOpY3V0aW9uIGRlIGxhIHJlcXXDqnRlIDpcIiwgZXJyb3IpO1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG59O1xuXG5jb25zdCBnZXRDb21tdW5lQnlOYW1lID0gYXN5bmMgKG5vbV9jb21tdW5lKSA9PiB7XG5cdGNvbnN0IHF1ZXJ5ID0gYFxuICAgICAgU0VMRUNUICogRlJPTSBjb21tdW5lIFdIRVJFIG5vbV9jb21tdW5lID0gPztcbiAgICBgO1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBleGVjdXRlUXVlcnkocXVlcnksIFtub21fY29tbXVuZV0pO1xuXHRcdHJldHVybiByZXN1bHRzO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsJ2V4w6ljdXRpb24gZGUgbGEgcmVxdcOqdGUgOlwiLCBlcnJvcik7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07XG5cbmNvbnN0IGdldEFsbEV0YWJsaXNzZW1lbnRzUGFyQ29tbXVuZSA9IGFzeW5jIChub21fY29tbXVuZSkgPT4ge1xuXHRjb25zdCBxdWVyeSA9IGBcbiAgICBTRUxFQ1QgYy5ub21fY29tbXVuZSwgZS5ub21fZXRhYmxpc3NlbWVudCwgZS5pZF9ldGFibGlzc2VtZW50LCBlLmFkcmVzc2UsIENPVU5UKGVsLmlkX2VsZXZlKSBBUyBub21icmVfZWxldmVzLCB0Lm5vbV90eXBlXG4gICAgICAgIEZST00gY29tbXVuZSBjXG4gICAgICAgIEpPSU4gZXRhYmxpc3NlbWVudCBlIE9OIGUuaWRfY29tbXVuZSA9IGMuaWRfY29tbXVuZVxuICAgICAgICBMRUZUIEpPSU4gZWxldmUgZWwgT04gZWwuaWRfZXRhYmxpc3NlbWVudCA9IGUuaWRfZXRhYmxpc3NlbWVudFxuICAgICAgICBMRUZUIEpPSU4gdHlwZV9ldGFibGlzc2VtZW50IHQgT04gdC5pZF90eXBlID0gZS5pZF90eXBlXG4gICAgICAgIFdIRVJFIGMubm9tX2NvbW11bmUgPSA/XG4gICAgICAgIEdST1VQIEJZIGMubm9tX2NvbW11bmUsIGUubm9tX2V0YWJsaXNzZW1lbnQsIGUuaWRfZXRhYmxpc3NlbWVudCwgZS5hZHJlc3NlLCB0Lm5vbV90eXBlOyBcbiAgICBgO1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBleGVjdXRlUXVlcnkocXVlcnksIFtub21fY29tbXVuZV0pO1xuXHRcdHJldHVybiByZXN1bHRzO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsJ2V4w6ljdXRpb24gZGUgbGEgcmVxdcOqdGUgOlwiLCBlcnJvcik7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07XG5cbmNvbnN0IGdldEV0YWJsaXNzZW1lbnRzUGFyQ29tbXVuZSA9IGFzeW5jIChub21fY29tbXVuZSwgbm9tX2V0YWJsaXNzZW1lbnQpID0+IHtcblx0bGV0IHF1ZXJ5ID0gYFxuICAgICAgU0VMRUNUIGMubm9tX2NvbW11bmUsIGUubm9tX2V0YWJsaXNzZW1lbnQsIGUuaWRfZXRhYmxpc3NlbWVudCwgZS5hZHJlc3NlLCBDT1VOVChlbC5pZF9lbGV2ZSkgQVMgbm9tYnJlX2VsZXZlcywgdC5ub21fdHlwZVxuICAgICAgRlJPTSBjb21tdW5lIGNcbiAgICAgIEpPSU4gZXRhYmxpc3NlbWVudCBlIE9OIGUuaWRfY29tbXVuZSA9IGMuaWRfY29tbXVuZVxuICAgICAgTEVGVCBKT0lOIGVsZXZlIGVsIE9OIGVsLmlkX2V0YWJsaXNzZW1lbnQgPSBlLmlkX2V0YWJsaXNzZW1lbnRcbiAgICAgIExFRlQgSk9JTiB0eXBlX2V0YWJsaXNzZW1lbnQgdCBPTiB0LmlkX3R5cGUgPSBlLmlkX3R5cGVcbiAgICAgIFdIRVJFIGMubm9tX2NvbW11bmUgPSA/XG4gICAgYDtcblx0dHJ5IHtcblx0XHRjb25zdCBwYXJhbXMgPSBbbm9tX2NvbW11bmVdO1xuXG5cdFx0aWYgKG5vbV9ldGFibGlzc2VtZW50KSB7XG5cdFx0XHRxdWVyeSArPSBgIEFORCBlLm5vbV9ldGFibGlzc2VtZW50IExJS0UgP2A7XG5cdFx0XHRwYXJhbXMucHVzaChgJSR7bm9tX2V0YWJsaXNzZW1lbnR9JWApO1xuXHRcdH1cblxuXHRcdHF1ZXJ5ICs9IGAgR1JPVVAgQlkgYy5ub21fY29tbXVuZSwgZS5ub21fZXRhYmxpc3NlbWVudCwgZS5pZF9ldGFibGlzc2VtZW50YDtcblxuXHRcdGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBleGVjdXRlUXVlcnkocXVlcnksIHBhcmFtcyk7XG5cdFx0cmV0dXJuIHJlc3VsdHM7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGwnZXjDqWN1dGlvbiBkZSBsYSByZXF1w6p0ZSA6XCIsIGVycm9yKTtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufTtcbmNvbnN0IGdldENsYXNzZVBhckV0YWJsaXNzZW1lbnQgPSBhc3luYyAobm9tX2V0YWJsaXNzZW1lbnQpID0+IHtcblx0Y29uc3QgcXVlcnkgPSBgXG4gICAgU0VMRUNUIGNsLm5vbSwgY2wubml2ZWF1LCBjbC5pZF9jbGFzc2Vcblx0XHRcdEZST00gY2xhc3NlIGNsXG5cdFx0XHRXSEVSRSBjbC5pZF9jbGFzc2UgSU4gKFxuXHRcdFx0XHRTRUxFQ1QgZWwuaWRfY2xhc3NlXG5cdFx0XHRcdEZST00gZWxldmUgZWxcblx0XHRcdFx0Sk9JTiBldGFibGlzc2VtZW50IGV0IE9OIGVsLmlkX2V0YWJsaXNzZW1lbnQgPSBldC5pZF9ldGFibGlzc2VtZW50XG5cdFx0XHRcdFdIRVJFIGV0Lm5vbV9ldGFibGlzc2VtZW50ID0gP1xuXHRcdCk7XG4gICAgYDtcblx0dHJ5IHtcblx0XHRjb25zdCByZXN1bHRzID0gYXdhaXQgZXhlY3V0ZVF1ZXJ5KHF1ZXJ5LCBbbm9tX2V0YWJsaXNzZW1lbnRdKTtcblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdleMOpY3V0aW9uIGRlIGxhIHJlcXXDqnRlIDpcIiwgZXJyb3IpO1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG59O1xuXG5jb25zdCBnZXRFbGV2ZXNQYXJDbGFzc2UgPSBhc3luYyAobm9tX2V0YWJsaXNzZW1lbnQsIG5vbV9jbGFzc2UpID0+IHtcblx0Y29uc3QgcXVlcnkgPSBgXG4gICAgU0VMRUNUIGVsLm5vbSwgZWwucHJlbm9tLCBlbC5kYXRlX25haXNzYW5jZSwgZWwubGlldV9uYWlzc2FuY2UsIGVsLnNleGUsIGVsLnRlbGVwaG9uZSwgYy5ub20gQVMgbm9tX2NsYXNzZSwgYy5uaXZlYXUsIGVsLmlkX2VsZXZlXG4gICAgICAgIEZST00gZWxldmUgZWxcbiAgICAgICAgSk9JTiBjbGFzc2UgYyBPTiBlbC5pZF9jbGFzc2UgPSBjLmlkX2NsYXNzZVxuICAgICAgICBKT0lOIGV0YWJsaXNzZW1lbnQgZXQgT04gZWwuaWRfZXRhYmxpc3NlbWVudCA9IGV0LmlkX2V0YWJsaXNzZW1lbnRcbiAgICAgICAgV0hFUkUgZXQubm9tX2V0YWJsaXNzZW1lbnQgPSA/XG4gICAgICAgIEFORCBjLm5vbSA9ID87XG4gICAgYDtcblx0dHJ5IHtcblx0XHRjb25zdCByZXN1bHRzID0gYXdhaXQgZXhlY3V0ZVF1ZXJ5KHF1ZXJ5LCBbbm9tX2V0YWJsaXNzZW1lbnQsIG5vbV9jbGFzc2VdKTtcblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdleMOpY3V0aW9uIGRlIGxhIHJlcXXDqnRlIDpcIiwgZXJyb3IpO1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG59O1xuY29uc3QgZ2V0RWxldmUgPSBhc3luYyAoaWRfZWxldmUpID0+IHtcblx0Y29uc3QgcXVlcnkgPSBgXG4gICAgU0VMRUNUIGVsLm5vbSwgZWwucHJlbm9tLCBlbC50ZWxlcGhvbmUsIGVsLnNleGUsIGVsLmxpZXVfbmFpc3NhbmNlLCBlbC5pZF9lbGV2ZSwgZWwuZGF0ZV9uYWlzc2FuY2UsIGVsLmVsZXZlX2ltZywgZWwud2lkdGgsIGVsLmhlaWdodCwgZWwuY29tbWVudGFpcmUsIGV0Lm5vbV9ldGFibGlzc2VtZW50LCBjby5ub21fY29tbXVuZSwgY2wubm9tIEFTIG5vbV9jbGFzc2VcbiAgICAgICAgRlJPTSBlbGV2ZSBlbFxuICAgICAgICBKT0lOIGV0YWJsaXNzZW1lbnQgZXQgT04gZWwuaWRfZXRhYmxpc3NlbWVudCA9IGV0LmlkX2V0YWJsaXNzZW1lbnRcbiAgICAgICAgSk9JTiBjb21tdW5lICBjbyAgT04gZWwuaWRfY29tbXVuZSA9IGNvLmlkX2NvbW11bmVcbiAgICAgICAgSk9JTiBjbGFzc2UgY2wgT04gIGVsLmlkX2NsYXNzZSA9IGNsLmlkX2NsYXNzZVxuICAgICAgICBXSEVSRSBlbC5pZF9lbGV2ZSA9ID87XG4gICAgYDtcblx0dHJ5IHtcblx0XHRjb25zdCByZXN1bHRzID0gYXdhaXQgZXhlY3V0ZVF1ZXJ5KHF1ZXJ5LCBbaWRfZWxldmVdKTtcblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdleMOpY3V0aW9uIGRlIGxhIHJlcXXDqnRlIDpcIiwgZXJyb3IpO1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG59O1xuY29uc3QgY2hlcmNoZWVFbGV2ZSA9IGFzeW5jIChub20sIHByZW5vbSwgaWRfZWxldmUpID0+IHtcblx0Y29uc3QgcXVlcnkgPSBgXG4gICAgU0VMRUNUIGVsLm5vbSwgZWwucHJlbm9tLCBlbC50ZWxlcGhvbmUsIGVsLnNleGUsIGVsLmxpZXVfbmFpc3NhbmNlLCBlbC5pZF9lbGV2ZSwgZWwuZGF0ZV9uYWlzc2FuY2UsIGV0Lm5vbV9ldGFibGlzc2VtZW50LCBjby5ub21fY29tbXVuZSwgY2wubm9tIEFTIG5vbV9jbGFzc2VcbiAgICAgICAgRlJPTSBlbGV2ZSBlbFxuICAgICAgICBKT0lOIGV0YWJsaXNzZW1lbnQgZXQgT04gZWwuaWRfZXRhYmxpc3NlbWVudCA9IGV0LmlkX2V0YWJsaXNzZW1lbnRcbiAgICAgICAgSk9JTiBjb21tdW5lICBjbyAgT04gZWwuaWRfY29tbXVuZSA9IGNvLmlkX2NvbW11bmVcbiAgICAgICAgSk9JTiBjbGFzc2UgY2wgT04gIGVsLmlkX2NsYXNzZSA9IGNsLmlkX2NsYXNzZVxuICAgICAgICBXSEVSRSBlbC5ub20gTElLRSA/XG4gICAgICAgIE9SIGVsLnByZW5vbSBMSUtFID9cbiAgICAgICAgT1IgZWwuaWRfZWxldmUgPSA/O1xuICAgIGA7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IGV4ZWN1dGVRdWVyeShxdWVyeSwgW2AlJHtub219JWAsIGAlJHtwcmVub219JWAsIGlkX2VsZXZlXSk7XG5cdFx0cmV0dXJuIHJlc3VsdHM7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGwnZXjDqWN1dGlvbiBkZSBsYSByZXF1w6p0ZSA6XCIsIGVycm9yKTtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufTtcbmNvbnN0IGFqb3V0ZXJFbGV2ZSA9IGFzeW5jIChcblx0bm9tLFxuXHRwcmVub20sXG5cdGRhdGVfbmFpc3NhbmNlLFxuXHRsaWV1X25haXNzYW5jZSxcblx0c2V4ZSxcblx0dGVsZXBob25lLFxuXHRpZF9jbGFzc2UsXG5cdGlkX2NvbW11bmUsXG5cdGlkX2V0YWJsaXNzZW1lbnQsXG5cdGNvbW1lbnRhaXJlLFxuXHRlbGV2ZV9pbWcsXG5cdHdpZHRoLFxuXHRoZWlnaHQsXG4pID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBxdWVyeSA9IGBcbiAgICAgICAgSU5TRVJUIElOVE8gZWxldmUgKG5vbSwgcHJlbm9tLCBkYXRlX25haXNzYW5jZSwgbGlldV9uYWlzc2FuY2UsIHNleGUsIHRlbGVwaG9uZSwgaWRfY2xhc3NlLCBpZF9jb21tdW5lLCBpZF9ldGFibGlzc2VtZW50LGNvbW1lbnRhaXJlLCBlbGV2ZV9pbWcsIHdpZHRoLGhlaWdodClcbiAgICAgICAgVkFMVUVTICg/LCA/LCA/LCA/LCA/LCA/LCA/LCA/LCA/LCA/LCA/LCA/LCA/KVxuICAgICAgYDtcblxuXHRcdGNvbnN0IHZhbHVlcyA9IFtcblx0XHRcdG5vbSxcblx0XHRcdHByZW5vbSxcblx0XHRcdGRhdGVfbmFpc3NhbmNlLFxuXHRcdFx0bGlldV9uYWlzc2FuY2UsXG5cdFx0XHRzZXhlLFxuXHRcdFx0dGVsZXBob25lLFxuXHRcdFx0aWRfY2xhc3NlLFxuXHRcdFx0aWRfY29tbXVuZSxcblx0XHRcdGlkX2V0YWJsaXNzZW1lbnQsXG5cdFx0XHRjb21tZW50YWlyZSxcblx0XHRcdGVsZXZlX2ltZyxcblx0XHRcdHdpZHRoLFxuXHRcdFx0aGVpZ2h0LFxuXHRcdF07XG5cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBleGVjdXRlUXVlcnkocXVlcnksIHZhbHVlcyk7XG5cblx0XHRjb25zdCBpZEVsZXZlID0gcmVzdWx0Lmluc2VydElkO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBpZEVsZXZlLFxuXHRcdFx0bm9tLFxuXHRcdFx0cHJlbm9tLFxuXHRcdFx0ZGF0ZV9uYWlzc2FuY2UsXG5cdFx0XHRsaWV1X25haXNzYW5jZSxcblx0XHRcdHNleGUsXG5cdFx0XHR0ZWxlcGhvbmUsXG5cdFx0XHRpZF9jbGFzc2UsXG5cdFx0XHRpZF9jb21tdW5lLFxuXHRcdFx0aWRfZXRhYmxpc3NlbWVudCxcblx0XHRcdGNvbW1lbnRhaXJlLFxuXHRcdFx0ZWxldmVfaW1nLFxuXHRcdFx0d2lkdGgsXG5cdFx0XHRoZWlnaHQsXG5cdFx0fTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufTtcblxuLy8gYXN5bmMgZnVuY3Rpb24gY2hlcmNoZWVFbGV2ZShub20sIHByZW5vbSkge1xuLy8gXHR0cnkge1xuLy8gXHRcdGNvbnN0IGRiID0gYXdhaXQgb3BlbkRhdGFiYXNlKCk7XG4vLyBcdFx0Y29uc3QgZWxldmUgPSBhd2FpdCBkYi5hbGwoXG4vLyBcdFx0XHRgXG4vLyBcdFx0XHRTRUxFQ1QgZWwubm9tLCBlbC5wcmVub20sIGVsLnRlbGVwaG9uZSwgZWwuc2V4ZSwgZWwubGlldV9uYWlzc2FuY2UsIGVsLmlkX2VsZXZlLCBlbC5kYXRlX25haXNzYW5jZSwgZXQubm9tX2V0YWJsaXNzZW1lbnQsIGNvLm5vbV9jb21tdW5lLCBjbC5ub20gQVMgbm9tX2NsYXNzZVxuLy8gXHRcdFx0XHRGUk9NIGVsZXZlIGVsXG4vLyBcdFx0XHRcdEpPSU4gZXRhYmxpc3NlbWVudCBldCBPTiBlbC5pZF9ldGFibGlzc2VtZW50ID0gZXQuaWRfZXRhYmxpc3NlbWVudFxuLy8gXHRcdFx0XHRKT0lOIGNvbW11bmUgIGNvICBPTiBlbC5pZF9jb21tdW5lID0gY28uaWRfY29tbXVuZVxuLy8gXHRcdFx0XHRKT0lOIGNsYXNzZSBjbCBPTiAgZWwuaWRfY2xhc3NlID0gY2wuaWRfY2xhc3NlXG4vLyBcdFx0XHRcdFdIRVJFIGVsLm5vbSA9ID9cbi8vIFx0XHRcdFx0T1IgZWwucHJlbm9tID0gPztgLFxuLy8gXHRcdFx0W25vbSwgcHJlbm9tXSxcbi8vIFx0XHQpO1xuLy8gXHRcdHJldHVybiBlbGV2ZTtcbi8vIFx0fSBjYXRjaCAoZXJyb3IpIHtcbi8vIFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG4vLyBcdH1cbi8vIH1cbmV4cG9ydCB7XG5cdGdldEFsbFJlZ2lvbnMsXG5cdGdldEFsbENvbW11bmVzLFxuXHRnZXRDb21tdW5lQnlOYW1lLFxuXHRnZXRBbGxFdGFibGlzc2VtZW50c1BhckNvbW11bmUsXG5cdGdldENsYXNzZVBhckV0YWJsaXNzZW1lbnQsXG5cdGdldEV0YWJsaXNzZW1lbnRzUGFyQ29tbXVuZSxcblx0Z2V0RWxldmVzUGFyQ2xhc3NlLFxuXHRnZXRFbGV2ZSxcblx0Y2hlcmNoZWVFbGV2ZSxcblx0YWpvdXRlckVsZXZlLFxufTtcbiJdLCJuYW1lcyI6WyJleGVjdXRlUXVlcnkiLCJnZXRBbGxSZWdpb25zIiwibm9tUmVnaW9uIiwicXVlcnkiLCJwYXJhbXMiLCJwdXNoIiwicmVzdWx0cyIsImVycm9yIiwiY29uc29sZSIsImdldEFsbENvbW11bmVzIiwibm9tX3JlZ2lvbiIsIm5vbUNvbW11bmUiLCJnZXRDb21tdW5lQnlOYW1lIiwibm9tX2NvbW11bmUiLCJnZXRBbGxFdGFibGlzc2VtZW50c1BhckNvbW11bmUiLCJnZXRFdGFibGlzc2VtZW50c1BhckNvbW11bmUiLCJub21fZXRhYmxpc3NlbWVudCIsImdldENsYXNzZVBhckV0YWJsaXNzZW1lbnQiLCJnZXRFbGV2ZXNQYXJDbGFzc2UiLCJub21fY2xhc3NlIiwiZ2V0RWxldmUiLCJpZF9lbGV2ZSIsImNoZXJjaGVlRWxldmUiLCJub20iLCJwcmVub20iLCJham91dGVyRWxldmUiLCJkYXRlX25haXNzYW5jZSIsImxpZXVfbmFpc3NhbmNlIiwic2V4ZSIsInRlbGVwaG9uZSIsImlkX2NsYXNzZSIsImlkX2NvbW11bmUiLCJpZF9ldGFibGlzc2VtZW50IiwiY29tbWVudGFpcmUiLCJlbGV2ZV9pbWciLCJ3aWR0aCIsImhlaWdodCIsInZhbHVlcyIsInJlc3VsdCIsImlkRWxldmUiLCJpbnNlcnRJZCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./queries.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/communes.js"));
module.exports = __webpack_exports__;

})();