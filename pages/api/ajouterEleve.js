import multer from 'multer';
import { ajouterEleve } from '../../queries.js';

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/images');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if (file.mimetype.startsWith('image')) {
		cb(null, true);
	} else {
		cb(new Error('Not an image! Please upload an image.'), false);
	}
};

const upload = multer({ storage, fileFilter }).single('photo');

export default function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Méthode non autorisée.' });
	}

	upload(req, res, async (err) => {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: 'Une erreur est survenue lors du traitement de la photo.' });
		}
		console.log(req.body);
		try {
			const { nom, prenom, date_naissance, lieu_naissance, sexe, telephone, id_classe, id_commune, id_etablissement, commentaire, width, height } =
				req.body;

			const nouvelEleve = await ajouterEleve(
				nom,
				prenom,
				date_naissance,
				lieu_naissance,
				sexe,
				telephone,
				id_classe,
				id_commune,
				id_etablissement,
				commentaire,
				req.file ? req.file.path : null,
				width,
				height,
			);

			return res.status(200).json({ nouvelEleve });
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error: "Une erreur est survenue lors de l'ajout de l'élève." });
		}
	});
}

// export default async function handler(request, response) {
// 	if (request.method === 'POST') {
// 		const { nom, prenom, date_naissance, lieu_naissance, sexe, telephone, id_classe, id_commune, id_etablissement, commentaire, width, height } =
// 			request.body;
// 		const nouvelEleve = await ajouterEleve(
// 			nom,
// 			prenom,
// 			date_naissance,
// 			lieu_naissance,
// 			sexe,
// 			telephone,
// 			id_classe,
// 			id_commune,
// 			id_etablissement,
// 			commentaire,
// 			'/images/photo.jpg',
// 			4468,
// 			3554,
// 		);
// 		console.log(request.body);
// 		response.status(200).json({ nouvelEleve });

// 		try {
// 		} catch (error) {
// 			response.status(500).json({ error: 'Une erreur est survenue lors de la récupération letablissement.' });
// 		}
// 	} else {
// 		response.status(405).json({ error: 'Méthode non autorisée.' });
// 	}
// }
