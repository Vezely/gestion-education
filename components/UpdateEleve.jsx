import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from '../styles/AjouterEleve.module.css';
import Link from 'next/link';
import moment from 'moment';
const AjouterEleve = () => {
	const [uniqueNumbers, setUniqueNumbers] = useState(new Set());
	const [recherche, setRecherche] = useState(false);
	const [eleveData, setEleveData] = useState([]);
	const generateNumber = () => {
		let newNumber;
		do {
			newNumber = Math.floor(100000 + Math.random() * 900000); // Génère un nombre entre 100000 et 999999
		} while (uniqueNumbers.has(newNumber));

		setUniqueNumbers((prevNumbers) => new Set(prevNumbers).add(newNumber));
		return newNumber;
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		reset,
	} = useForm();
	const menuRef = useRef();
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && menuRef.current.contains(event.target)) {
				setRecherche(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	const onSubmit = async (data) => {
		let response = await fetch(`/api/eleveCherche`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});

		if (response.ok) {
			const eleves = await response.json();
			setEleveData(eleves);
			// reset();
			setRecherche(true);
		}
	};
	console.log(eleveData);
	return (
		<>
			{/* <div>
				<button onClick={generateNumber}>Générer un nombre unique</button>
				<div>Liste des nombres générés: {[...uniqueNumbers].join(', ')}</div>
			</div> */}
			<div className={styles.formulaire}>
				<h2>Mettre a jour les informations de:</h2>
				<div className={styles.bar_recherche}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label htmlFor='recherche'>
							<input
								type='search'
								{...register('nom_eleve', { required: false })}
								name='nom_eleve'
								placeholder="Entrer l'identifiant de l'élève ici pour le trouver"
								onInput={handleSubmit(onSubmit)}
							/>

							<button type='submit'>
								<svg className={styles.svgSearch} viewBox='0 0 24 24' id='recherche'>
									<path d='m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z' />
								</svg>
							</button>
						</label>
						{recherche && eleveData.length > 0 && (
							<div className={styles.popupRecherche}>
								<div className={styles.masker} ref={menuRef}></div>
								{eleveData.map((eleve) => (
									<div
										onClick={() => setRecherche(false)}
										// href={`/etablissement/eleve/${eleve.nom}?id=${eleve.id_eleve}`}
										className={styles.box_recherche}
										key={eleve.id_eleve}>
										<div>{eleve.nom}</div>
										<div>{eleve.prenom}</div>
										{/* <div>{moment().diff(eleve.date_naissance, 'years')} ans</div>

										<div>{tronquerTexte(eleve.nom_etablissement, 15)}</div> */}
									</div>
								))}
							</div>
						)}
						{recherche && eleveData.length == 0 && (
							<div className={styles.popupRecherche}>
								<div className={styles.masker} ref={menuRef}></div>
								<div className={styles.aucunEleve}>Aucun élève trouver</div>
							</div>
						)}
					</form>
				</div>
				<form className={styles.form} encType='multipart/form-data'>
					<div className={styles.section}>
						<label>
							<span className={styles.obligatoire}>Nom : </span>
							<input
								type='text'
								placeholder='Nom'
								name='nom'
								// value={formData.nom} onChange={handleInputChange}
								autoFocus
							/>
							{/* {errors.nom && <p className={styles.erreur}>{errors.nom}</p>} */}
						</label>
						<label>
							<span className={styles.obligatoire}>Prénom : </span>
							<input
								type='text'
								placeholder='Prénom'
								name='prenom'
								// value={formData.prenom} onChange={handleInputChange}
							/>
							{/* {errors.prenom && <p className={styles.erreur}>{errors.prenom}</p>} */}
						</label>
						<label>
							<span className={styles.obligatoire}>Téléphone : </span>
							<input
								type='number'
								placeholder='Numéro de téléphone'
								name='telephone'
								// value={formData.telephone} onChange={handleInputChange}
							/>
							{/* {errors.telephone && <p className={styles.erreur}>{errors.telephone}</p>} */}
						</label>
					</div>
					<div className={styles.section}>
						<label>
							<span className={styles.obligatoire}>Date de naissance : </span>
							<input
								type='date'
								name='date_naissance'
								// value={formData.date_naissance}
								// onChange={handleInputChange}
							/>
							{/* {errors.date_naissance && <p className={styles.erreur}>{errors.date_naissance}</p>} */}
						</label>
						<label>
							<span className={styles.obligatoire}>Lieu de naissance : </span>
							<input
								type='text'
								placeholder='Lieu de naissance'
								name='lieu_naissance'
								// value={formData.lieu_naissance}
								// onChange={handleInputChange}
							/>
							{/* {errors.lieu_naissance && <p className={styles.erreur}>{errors.lieu_naissance}</p>} */}
						</label>
						<label>
							<div className={styles.obligatoire}>Sexe : </div>
							<select
								name='sexe'
								// value={formData.sexe} onChange={handleInputChange}
							>
								<option value='masculin'>masculin</option>
								<option value='feminin'>feminin</option>
							</select>

							{/* {errors.sexe && <p className={styles.erreur}>{errors.sexe}</p>} */}
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
							<select
							// onChange={(e) => getNomRegion(e.target.value)}
							>
								<option defaultValue={null}>Sélectionnez une région</option>
							</select>
						</label>
						<label>
							<div className={styles.obligatoire}>Ville : </div>
							<select name='id_commune'>
								<option value=''>Sélectionnez une ville</option>
							</select>
							{/* {errors.id_commune && <p className={styles.erreur}>{errors.id_commune}</p>} */}
						</label>
						<label>
							<div className={styles.obligatoire}>Établissement : </div>
							<select name='id_etablissement'>
								<option value=''>Sélectionnez un établissement</option>
							</select>
							{/* {errors.id_etablissement && <p className={styles.erreur}>{errors.id_etablissement}</p>} */}
						</label>
						<label>
							<div className={styles.obligatoire}>Classe : </div>
							<select name='id_classe'>
								<option value=''>Sélectionnez une classe</option>
							</select>
							{/* {errors.id_classe && <p className={styles.erreur}>{errors.id_classe}</p>} */}
						</label>
					</div>
					{/* <label className={styles.cyberpunk_checkbox_label}>
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
				)} */}
					<button style={{ marginTop: '1rem' }} className={styles.button} type='submit'>
						Mettre a jour
					</button>
				</form>
				{/* {succes && (
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
			)} */}
			</div>
		</>
	);
};

export default AjouterEleve;
