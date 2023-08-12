export default async function handler(request, response) {
	if (request.method === 'POST') {
		// const nom_eleve = request.body.nom_eleve;
		console.log(request.body.mot_de_passe);
		try {
			if (request.body.mot_de_passe === process.env.MOT_DE_PASSE_ADMIN) {
				response.status(200).json();
			} else {
				response.status(401).end();
			}
		} catch (error) {
			response.status(500).json({ error: 'Une erreur est survenue lors de la récupération letablissement.' });
		}
	} else {
		response.status(405).json({ error: 'Méthode non autorisée.' });
	}
}
