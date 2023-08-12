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

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue,
	} = useForm();
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

	const [photo, setPhoto] = useState(null);

	const photoRef = useRef(null);

	const handlePhotoChange = () => {
		if (photoRef.current) {
			const file = photoRef.current.files[0];
			setPhoto(file);
		}
	};

	const onSubmit = async (data) => {
		try {
			const formData = new FormData();
			for (const key in data) {
				if (data.hasOwnProperty(key)) {
					formData.append(key, data[key]);
				}
			}
			if (photo) {
				formData.append('photo', photo);
			}

			const response = await axios.post('/api/ajouterEleve', formData);

			if (response.data.nouvelEleve) {
				alert('Elève ajouté avec succès');
			} else {
				alert("Erreur lors de l'ajout de l'élève");
			}
		} catch (error) {
			alert("Erreur lors de l'ajout de l'élève");
			console.error(error);
		}
	};

	// const onSubmit = async (data) => {
	// 	try {
	// 		const response = await fetch('/api/ajouterEleve', {
	// 			method: 'POST',
	// 			headers: { 'Content-Type': 'application/json' },
	// 			body: JSON.stringify(data),
	// 		});

	// 		const responseData = await response.json();

	// 		if (responseData.success) {
	// 			alert('Elève ajouté avec succès');
	// 		} else {
	// 			alert("Erreur lors de l'ajout de l'élève");
	// 		}
	// 	} catch (error) {
	// 		alert("Erreur lors de l'ajout de l'élève");
	// 	}
	// };

	return (
		// <div className={styles.contenu}>
		<div className={styles.formulaire}>
			<h2>Inscrire un éléve</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
				<div className={styles.section}>
					<label>
						<span className={styles.obligatoire}>Nom : </span>
						<input
							type='text'
							placeholder='Nom'
							{...register('nom', {
								required: 'Le nom est obligatoire',
								minLength: {
									value: 3,
									message: 'Le nom doit avoir au moins 3 carractères',
								},
							})}
							name='nom'
							autoFocus
						/>
						{errors.nom && <p className={styles.erreur}>{errors.nom.message}</p>}
					</label>
					<label>
						<span className={styles.obligatoire}>Prénom : </span>
						<input
							type='text'
							placeholder='Prénom'
							{...register('prenom', {
								required: 'Le prénom est obligatoire',
								minLength: {
									value: 3,
									message: 'Le prénom doit avoir au moins 3 carractères',
								},
							})}
							name='prenom'
						/>
						{errors.prenom && <p className={styles.erreur}>{errors.prenom.message}</p>}
					</label>
					<label>
						<span className={styles.obligatoire}>Téléphone : </span>
						<input
							type='number'
							id=''
							placeholder='Numéro de téléphone'
							{...register('telephone', {
								required: 'Le numéro de téléphone est obligatoire',
								minLength: {
									value: 9,
									message: 'Le numéro de téléphone doit avoir au moins 9 chiffres',
								},
							})}
							name='telephone'
						/>
						{errors.telephone && <p className={styles.erreur}>{errors.telephone.message}</p>}
					</label>
				</div>
				<div className={styles.section}>
					<label>
						<span className={styles.obligatoire}>Date de naissance : </span>
						<input
							type='date'
							{...register('date_naissance', {
								required: 'La date de naissance est obligatoire',
							})}
							name='date_naissance'
						/>
						{errors.date_naissance && <p className={styles.erreur}>{errors.date_naissance.message}</p>}
					</label>
					<label>
						<span className={styles.obligatoire}>Lieu de naissance : </span>
						<input
							type='text'
							placeholder='Lieu de naissance'
							{...register('lieu_naissance', {
								required: 'Le lieu de naissance est obligatoire',
								minLength: {
									value: 5,
									message: 'Le lieu de naissance doit avoir au moins 5 carractères',
								},
							})}
							name='lieu_naissance'
						/>
						{errors.lieu_naissance && <p className={styles.erreur}>{errors.lieu_naissance.message}</p>}
					</label>
					<label>
						<div className={styles.obligatoire}>Sexe : </div>
						<select defaultValue='masculin' {...register('sexe', { required: 'Sélectionner une valeur sur la liste' })}>
							<option value='masculin'>masculin</option>
							<option value='feminin'>feminin</option>
						</select>
						{errors.sexe && <p className={styles.erreur}>{errors.sexe.message}</p>}
					</label>
				</div>
				<div className={styles.section}>
					<label>
						<span>Commentaire : </span>
						<textarea placeholder="Commentaire sur l'élève (Facultatif)" {...register('commentaire')} name='commentaire'></textarea>
					</label>
				</div>
				<div className={styles.section}>
					<label>
						<div>Région : </div>
						<select onChange={(e) => getNomRegion(e.target.value)}>
							<option defaultValue={null}>Sélectionnez une région</option>
							{regions.map((region) => (
								<option key={region.id_region} value={region.nom_region} required>
									{region.nom_region}
								</option>
							))}
						</select>
					</label>
					<label>
						<div className={styles.obligatoire}>Ville : </div>
						<select
							ref={villeRef}
							onChange={(e) => {
								getNomVille(e);
								setValue('id_commune', e.target.value);
							}}
							value={watch('id_commune')}
							required
							name='id_commune'>
							<option value=''>Sélectionnez une ville</option>
							{villes.map((ville) => (
								<option key={ville.id_commune} value={ville.id_commune}>
									{ville.nom_commune}
								</option>
							))}
						</select>
						{errors.id_commune && <p className={styles.erreur}>{errors.id_commune.message}</p>}
					</label>
					<label>
						<div className={styles.obligatoire}>Établissement : </div>
						<select
							ref={etablissementRef}
							onChange={(e) => {
								getNomEtablissement(e);
								setValue('id_etablissement', e.target.value);
							}}
							value={watch('id_etablissement')}
							required
							name='id_etablissement'>
							<option value=''>Sélectionnez un établissement</option>
							{etablissementData.map((etablissement) => (
								<option key={etablissement.id_etablissement} value={etablissement.id_etablissement}>
									{etablissement.nom_etablissement}
								</option>
							))}
						</select>
						{errors.id_etablissement && <p className={styles.erreur}>{errors.id_etablissement.message}</p>}
					</label>
					<label>
						<div className={styles.obligatoire}>Classe : </div>
						<select
							ref={classeRef}
							onChange={(e) => {
								setValue('id_classe', e.target.value);
							}}
							value={watch('id_classe')}
							required
							name='id_classe'>
							<option value=''>Sélectionnez une classe</option>
							{classeData.map((classe) => (
								<option key={classe.id_classe} value={classe.id_classe}>
									{classe.nom}
								</option>
							))}
						</select>
						{errors.id_classe && <p className={styles.erreur}>{errors.id_classe.message}</p>}
					</label>
				</div>

				<label className={styles.cyberpunk_checkbox_label}>
					<input className={styles.cyberpunk_checkbox} type='checkbox' onChange={ajouterPhot} />
					Ajouter une photo
				</label>
				{photo && (
					<>
						<p>Les dimentions de la photo:</p>
						<div className={styles.section}>
							<label>
								<span className={styles.obligatoire}>Photo : </span>
								<input
									type='file'
									ref={photoRef}
									{...register('photo', { required: 'Sélectionnez une photo' })}
									onChange={handlePhotoChange}
								/>
								{errors.photo && <p className={styles.erreur}>{errors.photo.message}</p>}
							</label>

							<label>
								<span className={styles.obligatoire}>Largeur : </span>
								<input type='number' {...register('width', { required: 'Indiquez la largeur' })} />
								{errors.width && <p className={styles.erreur}>{errors.width.message}</p>}
							</label>

							<label>
								<span className={styles.obligatoire}>Hauteur : </span>
								<input type='number' {...register('height', { required: 'Indiquez la hauteur' })} />
								{errors.height && <p className={styles.erreur}>{errors.height.message}</p>}
							</label>
						</div>
					</>
				)}
				<button className={styles.button} type='submit'>
					Ajouter
				</button>
			</form>
		</div>
		// </div>
	);
};

export default AjouterEleve;
