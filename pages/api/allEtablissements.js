import { getAllEtablissementsParCommune } from '../../queries';
export default async function handler(request, response) {
	if (request.method === 'GET') {
		const nom_etablissement = request.query.nomEtablissement.replace(/_/g, ' ') || '';
		try {
			const etablissements = await getAllEtablissementsParCommune(nom_etablissement);
			response.status(200).json(etablissements || []);
		} catch (error) {
			response.status(500).json({ error: 'Une erreur est survenue lors de la récupération des etablissement.' });
		}
	} else {
		response.status(405).json({ error: 'Méthode non autorisée.' });
	}
}
