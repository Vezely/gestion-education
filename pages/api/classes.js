import { getClasseParEtablissement } from '../../queries';
export default async function handler(request, response) {
	if (request.method === 'GET') {
		const nom_etablissement = request.query.nom_etablissement.replace(/_/g, ' ') || '';

		try {
			const classes = await getClasseParEtablissement(nom_etablissement);
			response.status(200).json(classes || []);
		} catch (error) {
			response.status(500).json({ error: 'Une erreur est survenue lors de la récupération de des classes.' });
		}
	} else {
		response.status(405).json({ error: 'Méthode non autorisée.' });
	}
}
