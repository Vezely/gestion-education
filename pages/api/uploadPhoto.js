// pages/api/uploadPhoto.js
import multer from 'multer';

const storage = multer.memoryStorage(); // stocker le fichier en mémoire; pour un stockage permanent, vous devriez utiliser multer.diskStorage
const upload = multer({ storage: storage }).single('photo');

export default function handler(req, res) {
	if (req.method === 'POST') {
		upload(req, res, function (err) {
			if (err) {
				return res.status(500).json({ error: 'Erreur lors du téléchargement' });
			}

			// Ici, req.file contient des informations sur le fichier téléchargé.
			// Vous pouvez, par exemple, le stocker dans un cloud ou une base de données.

			res.status(200).json({ message: 'Photo téléchargée avec succès' });
		});
	} else {
		res.status(405).json({ error: 'Méthode non autorisée' }); // Seules les requêtes POST sont acceptées
	}
}
