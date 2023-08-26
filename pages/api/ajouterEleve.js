import multer from 'multer';
import { ajouterEleve } from '../../queries.js';
import path from 'path';
import sizeOf from 'image-size';

export const config = {
	api: {
		bodyParser: false,
	},
};

// Configuration de Multer
const storage = multer.diskStorage({
	destination: 'public/images/profil/',
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({
	storage: storage,
	limits: { fileSize: 5 * 1024 * 1024 }, // Updated to 5MB
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	},
}).single('photo');

function checkFileType(file, cb) {
	const filetypes = /jpeg|jpg|png|gif/;
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = filetypes.test(file.mimetype);

	if (mimetype && extname) {
		return cb(null, true);
	} else {
		cb(new Error('Images Only!'));
	}
}

export default async function handler(req, res) {
	if (req.method === 'POST') {
		upload(req, res, async (err) => {
			// Notez que nous avons également rendu cette fonction de rappel asynchrone
			if (err) {
				res.status(500).json({ error: err.message });
				return;
			}
			const { nom, prenom, date_naissance, lieu_naissance, sexe, telephone, id_classe, id_commune, id_etablissement, commentaire } = req.body;
			try {
				// Si une photo a été envoyée
				if (req.file) {
					const dimensions = sizeOf(req.file.path);
					await ajouterEleve(
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
						`/images/profil/${req.file.filename}`,
						dimensions.width,
						dimensions.height,
					);
					res.status(200).json({
						msg: 'File uploaded!',
						nom: nom,
						prenom: prenom,
					});
				}
				// Si aucune photo n'a été envoyée
				else {
					await ajouterEleve(
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
						null,
						null,
						null,
					);
					res.status(200).json({
						msg: 'No file uploaded but the rest of the data is processed!',
						nom: nom,
						prenom: prenom,
					});
				}
			} catch (error) {
				res.status(500).json({ error: 'An error occurred while processing the request.' });
			}
		});
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
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
