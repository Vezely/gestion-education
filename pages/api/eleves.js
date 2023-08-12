import { getElevesParClasse } from '../../queries';

export default async function handler(request, response) {
	if (request.method === 'GET') {
		const { nom_etablissement, nom_classe } = request.query;
		const nom_etablissementT = nom_etablissement.replace(/_/g, ' ') || '';
		// console.log(nom_etablissementT, nom_classe);
		try {
			// Utilisez les valeurs des paramètres nom_etablissement et nom_classe pour effectuer les opérations souhaitées
			const eleves = await getElevesParClasse(nom_etablissementT, nom_classe);
			response.status(200).json(eleves || []);
		} catch (error) {
			response.status(500).json({ error: 'Une erreur est survenue lors de la récupération des élèves.' });
		}
	} else {
		response.status(405).json({ error: 'Méthode non autorisée.' });
	}
}
