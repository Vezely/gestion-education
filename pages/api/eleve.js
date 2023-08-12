import { getEleve } from '../../queries';

export default async function handler(request, response) {
	if (request.method === 'GET') {
		const id_eleve = request.query.id_eleve || '';
		// console.log(id_eleve);
		try {
			// Utilisez les valeurs des paramètres nom_etablissement et nom_classe pour effectuer les opérations souhaitées
			const eleve = await getEleve(id_eleve);
			response.status(200).json(eleve || []);
		} catch (error) {
			response.status(500).json({ error: 'Une erreur est survenue lors de la récupération de éleve.' });
		}
	} else {
		response.status(405).json({ error: 'Méthode non autorisée.' });
	}
}
// import { getEleve } from '../../queries';
// import bcrypt from 'bcryptjs';

// export default async function handler(request, response) {
// 	if (request.method === 'GET') {
// 		const id_hache = request.query.id || '';
// 		// const idEleve = await bcrypt.compare(id_hache);
// 		console.log(request.query);
// 		try {
// 			const eleve = await getEleve(idEleve);
// 			response.status(200).json(eleve || []);
// 		} catch (error) {
// 			response.status(500).json({ error: 'Une erreur est survenue lors de la récupération de éleve.' });
// 		}
// 	} else {
// 		response.status(405).json({ error: 'Méthode non autorisée.' });
// 	}
// }
