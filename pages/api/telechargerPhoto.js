import multer from 'multer';

const storage = multer.diskStorage({
	destination: 'public/images/profil/', // Enregistrez les fichiers téléchargés dans le dossier 'public/images/profil/'
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + '-' + uniqueSuffix);
	},
});

const upload = multer({ storage }).single('photo');

// Adaptez le middleware Multer pour Next.js
const middlewareMulter = (req, res) => {
	return new Promise((resolve, reject) => {
		upload(req, res, (err) => {
			if (err instanceof multer.MulterError) {
				return reject(new Error('Erreur Multer : ' + err.message));
			} else if (err) {
				return reject(err);
			}
			resolve();
		});
	});
};

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			await middlewareMulter(req, res);

			// Traitez l'image téléchargée ici, par exemple : sauvegardez-la dans une base de données, etc.

			res.status(200).send('Image téléchargée avec succès.');
		} catch (erreur) {
			console.error("Erreur lors du téléchargement de l'image:", erreur.message);
			res.status(500).send("Une erreur est survenue lors du téléchargement de l'image.");
		}
	} else {
		res.status(405).send('Méthode non autorisée.');
	}
}
