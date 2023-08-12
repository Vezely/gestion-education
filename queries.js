import { executeQuery } from './db.js';

const getAllRegions = async (nomRegion) => {
	let query = `
    select r.id_region, r.nom_region, r.description, r.width, r.height , r.region_img, count(distinct c.nom_commune) as nb_communes, count(distinct e.nom_etablissement ) as nb_etablissements from region r
    left join commune c on c.id_region=r.id_region
    left join etablissement e on e.id_commune= c.id_commune
    group by r.id_region, r.nom_region, r.description, r.width, r.height , r.region_img;
    `;

	const params = [];
	if (nomRegion) {
		query = `
        select r.id_region, r.nom_region, r.description, r.width, r.height , r.region_img, count(distinct c.nom_commune) as nb_communes, count(distinct e.nom_etablissement ) as nb_etablissements from region r
        left join commune c on c.id_region=r.id_region
        left join etablissement e on e.id_commune= c.id_commune
        WHERE nom_region LIKE ?
        group by r.id_region, r.nom_region, r.description, r.width, r.height , r.region_img;
      `;
		params.push(`%${nomRegion}%`);
	}

	try {
		const results = await executeQuery(query, params);
		return results;
	} catch (error) {
		console.error("Erreur lors de l'exécution de la requête :", error);
		throw error;
	}
};
const getAllCommunes = async (nom_region, nomCommune) => {
	let query = `
    SELECT distinct c.nom_commune, c.description, COUNT(DISTINCT et.nom_etablissement) AS nombre_ecoles, COUNT(el.id_eleve) AS nombre_eleves, c.commune_img, c.width, c.height, c.id_commune, r.nom_region
    FROM commune c
    LEFT JOIN etablissement et ON et.id_commune = c.id_commune
    LEFT JOIN eleve el ON el.id_etablissement = et.id_etablissement
    left join region r on r.id_region= c.id_region
    where r.nom_region = ?
    GROUP BY c.nom_commune, c.description, c.commune_img, c.width, c.height, c.id_commune
    order by COUNT(DISTINCT et.nom_etablissement) desc;
    `;

	const params = [nom_region];
	if (nomCommune) {
		query = `
        SELECT distinct c.nom_commune, c.description, COUNT(DISTINCT et.nom_etablissement) AS nombre_ecoles, COUNT(el.id_eleve) AS nombre_eleves, c.commune_img, c.width, c.height, c.id_commune, r.nom_region
        FROM commune c
        LEFT JOIN etablissement et ON et.id_commune = c.id_commune
        LEFT JOIN eleve el ON el.id_etablissement = et.id_etablissement
        left join region r on r.id_region= c.id_region
        where r.nom_region = ? AND c.nom_commune LIKE ?
        GROUP BY c.nom_commune, c.description, c.commune_img, c.width, c.height, c.id_commune
        order by COUNT(DISTINCT et.nom_etablissement) desc;
      `;
		params.push(`%${nomCommune}%`);
	}

	try {
		const results = await executeQuery(query, params);
		return results;
	} catch (error) {
		console.error("Erreur lors de l'exécution de la requête :", error);
		throw error;
	}
};

const getCommuneByName = async (nom_commune) => {
	const query = `
      SELECT * FROM commune WHERE nom_commune = ?;
    `;
	try {
		const results = await executeQuery(query, [nom_commune]);
		return results;
	} catch (error) {
		console.error("Erreur lors de l'exécution de la requête :", error);
		throw error;
	}
};

const getAllEtablissementsParCommune = async (nom_commune) => {
	const query = `
    SELECT c.nom_commune, e.nom_etablissement, e.id_etablissement, e.adresse, COUNT(el.id_eleve) AS nombre_eleves, t.nom_type
        FROM commune c
        JOIN etablissement e ON e.id_commune = c.id_commune
        LEFT JOIN eleve el ON el.id_etablissement = e.id_etablissement
        LEFT JOIN type_etablissement t ON t.id_type = e.id_type
        WHERE c.nom_commune = ?
        GROUP BY c.nom_commune, e.nom_etablissement, e.id_etablissement, e.adresse, t.nom_type; 
    `;
	try {
		const results = await executeQuery(query, [nom_commune]);
		return results;
	} catch (error) {
		console.error("Erreur lors de l'exécution de la requête :", error);
		throw error;
	}
};

const getEtablissementsParCommune = async (nom_commune, nom_etablissement) => {
	let query = `
      SELECT c.nom_commune, e.nom_etablissement, e.id_etablissement, e.adresse, COUNT(el.id_eleve) AS nombre_eleves, t.nom_type
      FROM commune c
      JOIN etablissement e ON e.id_commune = c.id_commune
      LEFT JOIN eleve el ON el.id_etablissement = e.id_etablissement
      LEFT JOIN type_etablissement t ON t.id_type = e.id_type
      WHERE c.nom_commune = ?
    `;
	try {
		const params = [nom_commune];

		if (nom_etablissement) {
			query += ` AND e.nom_etablissement LIKE ?`;
			params.push(`%${nom_etablissement}%`);
		}

		query += ` GROUP BY c.nom_commune, e.nom_etablissement, e.id_etablissement`;

		const results = await executeQuery(query, params);
		return results;
	} catch (error) {
		console.error("Erreur lors de l'exécution de la requête :", error);
		throw error;
	}
};
const getClasseParEtablissement = async (nom_etablissement) => {
	const query = `
    SELECT cl.nom, cl.niveau, cl.id_classe
			FROM classe cl
			WHERE cl.id_classe IN (
				SELECT el.id_classe
				FROM eleve el
				JOIN etablissement et ON el.id_etablissement = et.id_etablissement
				WHERE et.nom_etablissement = ?
		);
    `;
	try {
		const results = await executeQuery(query, [nom_etablissement]);
		return results;
	} catch (error) {
		console.error("Erreur lors de l'exécution de la requête :", error);
		throw error;
	}
};

const getElevesParClasse = async (nom_etablissement, nom_classe) => {
	const query = `
    SELECT el.nom, el.prenom, el.date_naissance, el.lieu_naissance, el.sexe, el.telephone, c.nom AS nom_classe, c.niveau, el.id_eleve
        FROM eleve el
        JOIN classe c ON el.id_classe = c.id_classe
        JOIN etablissement et ON el.id_etablissement = et.id_etablissement
        WHERE et.nom_etablissement = ?
        AND c.nom = ?;
    `;
	try {
		const results = await executeQuery(query, [nom_etablissement, nom_classe]);
		return results;
	} catch (error) {
		console.error("Erreur lors de l'exécution de la requête :", error);
		throw error;
	}
};
const getEleve = async (id_eleve) => {
	const query = `
    SELECT el.nom, el.prenom, el.telephone, el.sexe, el.lieu_naissance, el.id_eleve, el.date_naissance, el.eleve_img, el.width, el.height, el.commentaire, et.nom_etablissement, co.nom_commune, cl.nom AS nom_classe
        FROM eleve el
        JOIN etablissement et ON el.id_etablissement = et.id_etablissement
        JOIN commune  co  ON el.id_commune = co.id_commune
        JOIN classe cl ON  el.id_classe = cl.id_classe
        WHERE el.id_eleve = ?;
    `;
	try {
		const results = await executeQuery(query, [id_eleve]);
		return results;
	} catch (error) {
		console.error("Erreur lors de l'exécution de la requête :", error);
		throw error;
	}
};
const chercheeEleve = async (nom, prenom, id_eleve) => {
	const query = `
    SELECT el.nom, el.prenom, el.telephone, el.sexe, el.lieu_naissance, el.id_eleve, el.date_naissance, et.nom_etablissement, co.nom_commune, cl.nom AS nom_classe
        FROM eleve el
        JOIN etablissement et ON el.id_etablissement = et.id_etablissement
        JOIN commune  co  ON el.id_commune = co.id_commune
        JOIN classe cl ON  el.id_classe = cl.id_classe
        WHERE el.nom LIKE ?
        OR el.prenom LIKE ?
        OR el.id_eleve = ?;
    `;
	try {
		const results = await executeQuery(query, [`%${nom}%`, `%${prenom}%`, id_eleve]);
		return results;
	} catch (error) {
		console.error("Erreur lors de l'exécution de la requête :", error);
		throw error;
	}
};
const ajouterEleve = async (
	nom,
	prenom,
	date_naissance,
	lieu_naissance,
	sexe,
	telephone,
	id_classe,
	id_commune,
	id_etablissement,
	commentaire,
	eleve_img,
	width,
	height,
) => {
	try {
		const query = `
        INSERT INTO eleve (nom, prenom, date_naissance, lieu_naissance, sexe, telephone, id_classe, id_commune, id_etablissement,commentaire, eleve_img, width,height)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

		const values = [
			nom,
			prenom,
			date_naissance,
			lieu_naissance,
			sexe,
			telephone,
			id_classe,
			id_commune,
			id_etablissement,
			commentaire,
			eleve_img,
			width,
			height,
		];

		const result = await executeQuery(query, values);

		const idEleve = result.insertId;

		return {
			id: idEleve,
			nom,
			prenom,
			date_naissance,
			lieu_naissance,
			sexe,
			telephone,
			id_classe,
			id_commune,
			id_etablissement,
			commentaire,
			eleve_img,
			width,
			height,
		};
	} catch (error) {
		throw error;
	}
};

// async function chercheeEleve(nom, prenom) {
// 	try {
// 		const db = await openDatabase();
// 		const eleve = await db.all(
// 			`
// 			SELECT el.nom, el.prenom, el.telephone, el.sexe, el.lieu_naissance, el.id_eleve, el.date_naissance, et.nom_etablissement, co.nom_commune, cl.nom AS nom_classe
// 				FROM eleve el
// 				JOIN etablissement et ON el.id_etablissement = et.id_etablissement
// 				JOIN commune  co  ON el.id_commune = co.id_commune
// 				JOIN classe cl ON  el.id_classe = cl.id_classe
// 				WHERE el.nom = ?
// 				OR el.prenom = ?;`,
// 			[nom, prenom],
// 		);
// 		return eleve;
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
export {
	getAllRegions,
	getAllCommunes,
	getCommuneByName,
	getAllEtablissementsParCommune,
	getClasseParEtablissement,
	getEtablissementsParCommune,
	getElevesParClasse,
	getEleve,
	chercheeEleve,
	ajouterEleve,
};
