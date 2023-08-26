import { chercheeEleve } from '../../queries';
export default async function handler(request, response) {
	if (request.method === 'POST') {
		const nom_eleve = request.body.nom_eleve;
		console.log(request.body);
		try {
			const elevesData = await chercheeEleve(nom_eleve, nom_eleve, nom_eleve);
			response.status(200).json(elevesData || []);
		} catch (error) {
			response.status(500).json({ error: 'Une erreur est survenue lors de la récupération letablissement.' });
		}
	} else {
		response.status(405).json({ error: 'Méthode non autorisée.' });
	}
}
