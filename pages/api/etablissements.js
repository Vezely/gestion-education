import { getEtablissementsParCommune } from '../../queries';
export default async function handler(request, response) {
	if (request.method === 'POST') {
		const nom_commune = request.query.nom_commune || '';
		console.log(request.query);
		try {
			const commune = await getEtablissementsParCommune(nom_commune, request.body.nom_etablissement);
			response.status(200).json(commune || []);
		} catch (error) {
			response.status(500).json({ error: 'Une erreur est survenue lors de la récupération des etablissement.' });
		}
	} else {
		response.status(405).json({ error: 'Méthode non autorisée.' });
	}
}
