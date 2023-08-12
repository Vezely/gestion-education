import { getAllCommunes } from '../../queries.js';
export default async function handler(request, response) {
	if (request.method === 'GET') {
		console.log(request.query);
		const nom_region = request.query.nom_region || '';

		try {
			const communes = await getAllCommunes(nom_region);
			response.status(200).json(communes);
		} catch (error) {
			response.status(500).json({ error: 'Une erreur est survenue lors de la récupération des eleves.' });
		}
	} else {
		response.status(405).json({ error: 'Méthode non autorisée.' });
	}
}
// nom_region.charAt(0).toUpperCase() + nom_region.slice(1);
