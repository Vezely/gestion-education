import multer from 'multer';
import path from 'path';
import sizeOf from 'image-size';
import { updateEleveImageInfo } from '../../queries.js';
import { log } from 'console';
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
export default function handler(req, res) {
	if (req.method === 'POST') {
		// Envelopper la fonction "upload" dans une promesse pour gérer le comportement asynchrone
		const promesseUpload = new Promise((resolve, reject) => {
			upload(req, res, (err) => {
				if (err) {
					reject(err);
				} else if (!req.file) {
					reject(new Error('Aucun fichier sélectionné !'));
				} else {
					resolve();
				}
			});
		});

		promesseUpload
			.then(async () => {
				const dimensions = sizeOf(req.file.path);

				await updateEleveImageInfo(req.body.id, `/images/profil/${req.file.filename}`, dimensions.width, dimensions.height);

				res.status(200).json({
					msg: 'Fichier téléchargé !',
					file: `/images/profil/${req.file.filename}`,
				});
			})
			.catch((err) => {
				console.error('Erreur :', err);
				res.status(500).json({ error: err.message });
			});
	} else {
		res.status(405).json({ error: 'Méthode non autorisée' });
	}
}
