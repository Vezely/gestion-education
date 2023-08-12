import { getCommuneByName } from '../../queries';
export default async function handler(request, response) {
	if (request.method === 'GET') {
		const nom_commune = request.query.nom_commune || '';
		// console.log(request.query.nom_commune);
		try {
			const commune = await getCommuneByName(nom_commune.charAt(0).toUpperCase() + nom_commune.slice(1));
			response.status(200).json(commune || []);
			// console.log(eleves);
		} catch (error) {
			response.status(500).json({ error: 'Une erreur est survenue lors de la récupération de la commune.' });
		}
	} else {
		response.status(405).json({ error: 'Méthode non autorisée.' });
	}
}
