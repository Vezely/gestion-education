import styles from '../../styles/Etablissement.module.css';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Etablissements from '../../components/Etablissements';
import { hashEleveIdAsync } from '../../hashUtils';
const Etablissement = () => {
	const router = useRouter();
	const [classeData, setClasseData] = useState([]);
	const [elevesData, setElevesData] = useState([]);
	const [etablissementData, setEtablissementData] = useState([]);
	const [nomEtablissement, setNomEtablissement] = useState('');
	const [nomClasse, setNomClasse] = useState('');

	const [idEleve, setIdEleve] = useState(null);
	const [hashedIdEleve, setHashedIdEleve] = useState('');

	// useEffect(() => {
	// 	async function hashId() {
	// 		if (idEleve) {
	// 			try {
	// 				const hashedId = await hashEleveIdAsync(idEleve);
	// 				setHashedIdEleve(hashedId);
	// 			} catch (error) {
	// 				console.error("Erreur lors du hachage de l'ID de l'élève :", error);
	// 			}
	// 		}
	// 	}

	// 	hashId();
	// }, [idEleve]);

	useEffect(() => {
		const { etablissement } = router.query;
		if (etablissement) {
			setNomEtablissement(etablissement);
		}
	}, [router.query]);
	// console.log(router.query.etablissement);
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

	useEffect(() => {
		async function fetchElevesData() {
			if (nomEtablissement && nomClasse) {
				const query = `nom_etablissement=${nomEtablissement}&nom_classe=${nomClasse}`;
				const response = await fetch(`/api/eleves?${query}`, {
					method: 'GET',
					headers: { 'Content-Type': 'application/json' },
				});
				const data = await response.json();
				setElevesData(data);
			}
		}

		fetchElevesData();
	}, [nomEtablissement, nomClasse]);

	const handleClasseSelection = (classeNom) => {
		setNomClasse(classeNom);
	};

	// const handleClick = async (id_eleve, nom_eleve) => {
	// 	if (id_eleve && nom_eleve) {
	// 		try {
	// 			const hashedId = await hashEleveIdAsync(id_eleve, nom_eleve);
	// 			setIdEleve(id_eleve);
	// 			setHashedIdEleve(hashedId);
	// 			await router.push(`/etablissement/eleve/${nom_eleve}?id= ${hashedId}`); // Utilisation de la version asynchrone de router.push
	// 		} catch (error) {
	// 			console.error("Erreur lors du hachage de l'ID de l'élève :", error);
	// 		}
	// 	}
	// };
	const handleClick = async (id_eleve, nom_eleve) => {
		if (id_eleve && nom_eleve) {
			setIdEleve(id_eleve);
			try {
				await router.push(`/etablissement/eleve/${nom_eleve}?id=${id_eleve}`); // Utilisation de la version asynchrone de router.push
			} catch (error) {
				console.error("Erreur lors du hachage de l'ID de l'élève :", error);
			}
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.contenu}>
				{etablissementData.map((etablissement) => (
					<div className={styles.infos} key={etablissement.id_etablissement}>
						<div>
							<h1>{etablissement.nom_etablissement}</h1>
							<div>type: {etablissement.nom_type}</div>
						</div>
						<div>
							<div className={styles.adresse}>Adresse: {etablissement.adresse}</div>
							<div className={styles.nb_eleve}>{etablissement.nombre_eleves} Élèves</div>
						</div>
					</div>
				))}

				<div className={styles.box_container}>
					<h1>{nomEtablissement.replace(/_/g, ' ')}</h1>
					<div className={styles.classe}>
						<div className={styles.nom_classe}>
							<select name='classe' id='classe' onChange={(e) => handleClasseSelection(e.target.value)}>
								<option value='selectionnez une classe'>selectionnez une classe</option>
								{classeData.map((classe) => (
									<option key={classe.id_classe} value={classe.nom}>
										{classe.nom}
									</option>
								))}
							</select>
						</div>

						<div className={styles.box_eleve}>
							<table className={styles.table}>
								<tbody>
									<tr>
										<th>Nom</th>
										<th>Prénom</th>
										{/* <th>Date de naissance</th> */}
										{/* <th>Lieu de naissance</th> */}
										<th>Sexe</th>
										{/* <th>Téléphone</th> */}
									</tr>

									{elevesData.map((eleve) => (
										<tr key={eleve.id_eleve} onClick={() => handleClick(eleve.id_eleve, eleve.nom)}>
											<td>{eleve.nom}</td>
											<td>{eleve.prenom}</td>
											{/* <td>{eleve.date_naissance}</td> */}
											{/* <td>{eleve.lieu_naissance}</td> */}
											<td>{eleve.sexe}</td>
											{/* <td>{eleve.telephone}</td> */}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
					<Etablissements />
				</div>
			</div>
		</div>
	);
};

export default Etablissement;
