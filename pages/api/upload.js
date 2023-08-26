import multer from 'multer';
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

export default function handler(req, res) {
	if (req.method === 'POST') {
		upload(req, res, (err) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				if (!req.file) {
					res.status(400).json({ error: 'No file selected!' });
				} else {
					const description = req.body.description; // Voici votre texte
					console.log('Body', req.body);

					// res.status(200).json({ msg: 'File and text uploaded!', description: description, file: `/uploads/${req.file.filename}` });
					const dimensions = sizeOf(req.file.path);
					res.status(200).json({
						msg: 'File uploaded!',
						file: `/images/profil/${req.file.filename}`,
						width: dimensions.width,
						height: dimensions.height,
					});
				}
			}
		});
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
}
