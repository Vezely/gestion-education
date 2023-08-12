import { getAllRegions } from '../../queries.js';
export default async function handler(request, response) {
	if (request.method === 'POST') {
		try {
			const regions = await getAllRegions(request.body.nom_region);
			response.status(200).json(regions);
			// console.log(request.body.nom_region);
			// console.log(communes);
		} catch (error) {
			response.status(500).json({ error: 'Une erreur est survenue lors de la récupération des eleves.' });
		}
	} else {
		response.status(405).json({ error: 'Méthode non autorisée.' });
	}
}
