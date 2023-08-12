import styles from '../../styles/Etablissement.module.css';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Menu from '../../components/Menu';

const Etablissement = () => {
	const router = useRouter();
	const [classeData, setClasseData] = useState([]);
	const [elevesData, setElevesData] = useState([]);
	const [etablissementData, setEtablissementData] = useState([]);
	const [nomEtablissement, setNomEtablissement] = useState('');
	const [nomClasse, setNomClasse] = useState('Cours élémentaire 1 (CE1)');

	useEffect(() => {
		const { etablissement } = router.query;
		if (etablissement) {
			setNomEtablissement(etablissement);
		}
	}, [router.query]);

	useEffect(() => {
		async function fetchEtablissementData() {
			if (nomEtablissement) {
				const response = await fetch(`/api/unEtablissement?nomEtablissement=${nomEtablissement}`, {
					method: 'GET',
					headers: { 'Content-Type': 'application/json' },
				});
				const data = await response.json();
				setEtablissementData(data);
			}
		}

		fetchEtablissementData();
	}, [nomEtablissement]);

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

	// console.log(elevesData);

	return (
		<div className={styles.container}>
			<Menu />
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
					{classeData.map((classe) => (
						<div className={styles.classe} key={classe.id_classe}>
							<div className={styles.nom_classe}>
								<h2 onClick={() => handleClasseSelection(classe.nom)}>{classe.nom}</h2>
								<div>{classe.niveau}</div>
							</div>

							<div className={styles.box_eleve}>
								<table className={styles.table}>
									<tbody>
										<details>
											<summary>
												<tr>
													<th>Nom</th>
													<th>Prénom</th>
													<th>Date de naissance</th>
													<th>Lieu de naissance</th>
													<th>Sexe</th>
													<th>Téléphone</th>
												</tr>
											</summary>
											{elevesData.map((eleve) => (
												<tr key={eleve.id_eleve}>
													<td>{eleve.nom}</td>
													<td>{eleve.prenom}</td>
													<td>{eleve.date_naissance}</td>
													<td>{eleve.lieu_naissance}</td>
													<td>{eleve.sexe}</td>
													<td>{eleve.telephone}</td>
												</tr>
											))}
										</details>

										{/* <tr>
												<td>2</td>
												<td>Camara</td>
												<td>Aminata</td>
												<td>2006-08-20</td>
												<td>Conakry</td>
												<td>Féminin</td>
												<td>9876543210</td>
											</tr> */}
									</tbody>
								</table>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Etablissement;
