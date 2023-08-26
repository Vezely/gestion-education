import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from '../styles/AjouterEleve.module.css';
const AjouterEleve = () => {
	// const [photo, setPhoto] = useState(false);
	const [regions, setRegions] = useState([]);
	const [villes, setVilles] = useState([]);
	const [etablissementData, setEtablissementData] = useState([]);
	const [classeData, setClasseData] = useState([]);
	const [nomCommune, setNomCommune] = useState('');
	const [nomRegion, setNomRegion] = useState('');
	const [nomEtablissement, setNomEtablissement] = useState('');

	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: { errors },
	// 	watch,
	// 	setValue,
	// } = useForm();
	const classeRef = useRef(null);
	const villeRef = useRef(null);
	const etablissementRef = useRef(null);
	const ajouterPhot = () => {
		setPhoto(!photo);
	};
	useEffect(() => {
		async function fetchRegion() {
			let response = await fetch('/api/regions', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
			});
			const data = await response.json();
			setRegions(data);
		}
		fetchRegion();
	}, []);
	const getNomRegion = (nom) => {
		setNomRegion(nom);
	};
	const getNomVille = (e) => {
		const options = e.target.options;
		for (let i = 0; i < options.length; i++) {
			if (options[i].selected) {
				setNomCommune(options[i].text);
				break;
			}
		}
	};
	const getNomEtablissement = (e) => {
		// setNomEtablissement(nom);
		const options = e.target.options;
		for (let i = 0; i < options.length; i++) {
			if (options[i].selected) {
				setNomEtablissement(options[i].text);
				break;
			}
		}
	};
	useEffect(() => {
		async function fetchCommunes() {
			if (nomRegion) {
				const response = await fetch(`/api/communes?nom_region=${nomRegion}`, {
					method: 'GET',
					headers: { 'Content-Type': 'application/json' },
				});
				const data = await response.json();
				setVilles(data);
			}
		}
		fetchCommunes();
	}, [nomRegion]);

	useEffect(() => {
		async function fetchEtablissementData() {
			if (nomCommune) {
				const response = await fetch(`/api/etablissements?nom_commune=${nomCommune}`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
				});
				const data = await response.json();
				setEtablissementData(data);
			}
		}

		fetchEtablissementData();
	}, [nomCommune]);
	useEffect(() => {
		async function fetchClassesData() {
			if (nomEtablissement) {
				const response = await fetch(`/api/classes?nom_etablissement=${nomEtablissement}`, {
					method: 'GET',
					headers: { 'Content-Type': 'application/json' },
				});
				const data = await response.json();
				setClasseData(data);
			}
		}

		fetchClassesData();
	}, [nomEtablissement]);

	const [file, setFile] = useState(null);
	const [msg, setMsg] = useState(null);
	const [nomEleve, setNomEleve] = useState('');
	const [photo, setPhoto] = useState(null);
	const [succes, setSucces] = useState(false);

	const [formData, setFormData] = useState({
		nom: '',
		prenom: '',
		telephone: '',
		date_naissance: '',
		lieu_naissance: '',
		sexe: 'masculin',
		id_commune: '',
		id_etablissement: '',
		id_classe: '',
		photo: null,
	});
	const initialFormData = {
		nom: '',
		prenom: '',
		telephone: '',
		date_naissance: '',
		lieu_naissance: '',
		sexe: 'masculin',
		id_commune: '',
		id_etablissement: '',
		id_classe: '',
		photo: null,
	};

	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handlePhotoChange = (e) => {
		const { name, files } = e.target;
		if (files && files[0]) {
			setFormData((prevState) => ({
				...prevState,
				[name]: e.target,
			}));
		}
	};

	const validateForm = () => {
		let errors = {};

		// Validation du nom
		if (!formData.nom || formData.nom.length < 3) {
			errors.nom = 'Le nom doit avoir au moins 3 caractères';
		}

		// Validation du prénom
		if (!formData.prenom || formData.prenom.length < 3) {
			errors.prenom = 'Le prénom doit avoir au moins 3 caractères';
		}

		// Validation du numéro de téléphone
		if (!formData.telephone || formData.telephone.length < 9) {
			errors.telephone = 'Le numéro de téléphone doit avoir au moins 9 chiffres';
		}

		// Validation de la date de naissance
		if (!formData.date_naissance) {
			errors.date_naissance = 'La date de naissance est obligatoire';
		}

		// Validation du lieu de naissance
		if (!formData.lieu_naissance || formData.lieu_naissance.length < 5) {
			errors.lieu_naissance = 'Le lieu de naissance doit avoir au moins 5 caractères';
		}

		// Validation du sexe
		if (!formData.sexe) {
			errors.sexe = 'Sélectionner une valeur sur la liste';
		}

		// Validation de la commune
		if (!formData.id_commune) {
			errors.id_commune = "Commencez d'abord par sélectionnez la région avant la ville";
		}

		// Validation de l'établissement
		if (!formData.id_etablissement) {
			errors.id_etablissement = 'Sélectionnez un établissement';
		}

		// Validation de la classe
		if (!formData.id_classe) {
			errors.id_classe = 'Sélectionnez une classe';
		}

		// Validation de la photo (si elle est ajoutée)

		if (photo && (!formData.photo || !formData.photo.files || !formData.photo.files[0])) {
			errors.photo = 'Sélectionnez une photo';
		}

		return errors;
	};

	const handleUpload = async (event) => {
		event.preventDefault();

		// Réinitialisation des erreurs
		setErrors({});

		const validationErrors = validateForm();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		const formDataToSend = new FormData();
		for (let key in formData) {
			formDataToSend.append(key, formData[key]);
		}
		// Ajoutez la photo seulement si elle est sélectionnée
		if (photo && formData.photo && formData.photo.files && formData.photo.files[0]) {
			formDataToSend.append('photo', formData.photo.files[0]);
		}
		try {
			const response = await fetch('/api/ajouterEleve', {
				method: 'POST',
				body: formDataToSend,
			});

			const data = await response.json();
			if (data.error) {
				setErrors({ form: data.error });
			} else {
				setFile(data.file);
				setMsg(data.msg);
				setFormData(initialFormData);
				setNomEleve(data.nom + ' ' + data.prenom);
				setSucces(true);
			}
		} catch (error) {
			setErrors({ form: 'An error occurred. Please try again.' });
		}
	};

	return (
		// <div className={styles.contenu}>
		<div className={styles.formulaire}>
			<h2>Inscrire un éléve</h2>
			<form className={styles.form} onSubmit={handleUpload} encType='multipart/form-data'>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta facere dolor iure voluptatibus omnis, recusandae quis aut aspernatur ex
					id ut sunt deserunt, atque doloremque exercitationem. In officia minus laboriosam.
				</p>
				<div className={styles.section}>
					<label>
						<span className={styles.obligatoire}>Nom : </span>
						<input type='text' placeholder='Nom' name='nom' value={formData.nom} onChange={handleInputChange} autoFocus />
						{errors.nom && <p className={styles.erreur}>{errors.nom}</p>}
					</label>
					<label>
						<span className={styles.obligatoire}>Prénom : </span>
						<input type='text' placeholder='Prénom' name='prenom' value={formData.prenom} onChange={handleInputChange} />
						{errors.prenom && <p className={styles.erreur}>{errors.prenom}</p>}
					</label>
					<label>
						<span className={styles.obligatoire}>Téléphone : </span>
						<input type='number' placeholder='Numéro de téléphone' name='telephone' value={formData.telephone} onChange={handleInputChange} />
						{errors.telephone && <p className={styles.erreur}>{errors.telephone}</p>}
					</label>
				</div>
				<div className={styles.section}>
					<label>
						<span className={styles.obligatoire}>Date de naissance : </span>
						<input type='date' name='date_naissance' value={formData.date_naissance} onChange={handleInputChange} />
						{errors.date_naissance && <p className={styles.erreur}>{errors.date_naissance}</p>}
					</label>
					<label>
						<span className={styles.obligatoire}>Lieu de naissance : </span>
						<input
							type='text'
							placeholder='Lieu de naissance'
							name='lieu_naissance'
							value={formData.lieu_naissance}
							onChange={handleInputChange}
						/>
						{errors.lieu_naissance && <p className={styles.erreur}>{errors.lieu_naissance}</p>}
					</label>
					<label>
						<div className={styles.obligatoire}>Sexe : </div>
						<select name='sexe' value={formData.sexe} onChange={handleInputChange}>
							<option value='masculin'>masculin</option>
							<option value='feminin'>feminin</option>
						</select>

						{errors.sexe && <p className={styles.erreur}>{errors.sexe}</p>}
					</label>
				</div>
				<div className={styles.section}>
					<label>
						<span>Commentaire : </span>
						<textarea placeholder="Commentaire sur l'élève (Facultatif)" name='commentaire'></textarea>
					</label>
				</div>
				<div className={styles.section}>
					<label>
						<div>Région : </div>
						<select onChange={(e) => getNomRegion(e.target.value)}>
							<option defaultValue={null}>Sélectionnez une région</option>
							{regions.map((region) => (
								<option key={region.id_region} value={region.nom_region}>
									{region.nom_region}
								</option>
							))}
						</select>
					</label>
					<label>
						<div className={styles.obligatoire}>Ville : </div>
						<select
							ref={villeRef}
							value={formData.id_commune}
							onChange={(e) => {
								getNomVille(e);
								handleInputChange(e);
							}}
							name='id_commune'>
							<option value=''>Sélectionnez une ville</option>
							{villes.map((ville) => (
								<option key={ville.id_commune} value={ville.id_commune}>
									{ville.nom_commune}
								</option>
							))}
						</select>
						{errors.id_commune && <p className={styles.erreur}>{errors.id_commune}</p>}
					</label>
					<label>
						<div className={styles.obligatoire}>Établissement : </div>
						<select
							ref={etablissementRef}
							onChange={(e) => {
								getNomEtablissement(e);
								// setValue('id_etablissement', e.target.value);
								handleInputChange(e);
							}}
							value={formData.id_etablissement}
							name='id_etablissement'>
							<option value=''>Sélectionnez un établissement</option>
							{etablissementData.map((etablissement) => (
								<option key={etablissement.id_etablissement} value={etablissement.id_etablissement}>
									{etablissement.nom_etablissement}
								</option>
							))}
						</select>
						{errors.id_etablissement && <p className={styles.erreur}>{errors.id_etablissement}</p>}
					</label>
					<label>
						<div className={styles.obligatoire}>Classe : </div>
						<select
							ref={classeRef}
							onChange={(e) => {
								// setValue('id_classe', e.target.value);
								handleInputChange(e);
							}}
							value={formData.id_classe}
							name='id_classe'>
							<option value=''>Sélectionnez une classe</option>
							{classeData.map((classe) => (
								<option key={classe.id_classe} value={classe.id_classe}>
									{classe.nom}
								</option>
							))}
						</select>
						{errors.id_classe && <p className={styles.erreur}>{errors.id_classe}</p>}
					</label>
				</div>
				<label className={styles.cyberpunk_checkbox_label}>
					<input className={styles.cyberpunk_checkbox} type='checkbox' onChange={ajouterPhot} />
					Ajouter une photo
				</label>
				{photo && (
					<div className={styles.section}>
						<label>
							<span className={styles.obligatoire}>Photo : </span>
							<input accept='image/*' type='file' name='photo' onChange={handlePhotoChange} />

							{errors.photo && <p className={styles.erreur}>{errors.photo}</p>}
						</label>
					</div>
				)}
				<button className={styles.button} type='submit'>
					Inscrire
				</button>
			</form>
			{succes && (
				<div className={styles.succes}>
					<span className={styles.maske}></span>
					<div>
						<svg viewBox='-3.5 0 19 19'>
							<g id='SVGRepo_iconCarrier'>
								<path d='M4.63 15.638a1.028 1.028 0 0 1-.79-.37L.36 11.09a1.03 1.03 0 1 1 1.58-1.316l2.535 3.043L9.958 3.32a1.029 1.029 0 0 1 1.783 1.03L5.52 15.122a1.03 1.03 0 0 1-.803.511.89.89 0 0 1-.088.004z'></path>
							</g>
						</svg>
						<div>{nomEleve} a été inscrit avec succès</div>
						<button onClick={() => setSucces(false)}>OK</button>
					</div>
				</div>
			)}
		</div>
		// </div>
	);
};

export default AjouterEleve;
