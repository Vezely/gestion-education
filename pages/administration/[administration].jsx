import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Administration.module.css';
import AjouterEleve from '../../components/AjouterEleve';
import UpdateEleve from '../../components/UpdateEleve';
const administration = () => {
	const router = useRouter();
	const [path, setPath] = useState('');
	const [elementAffiche, setElementAffiche] = useState('Élève');
	const changeElement = (element) => {
		setElementAffiche(element);
	};
	const [formulaireAffiche, setFormulaireAffiche] = useState('Élève');
	const changeFormulaire = (element) => {
		setFormulaireAffiche(element);
	};
	useEffect(() => {
		const { administration } = router.query;
		if (administration) {
			setPath(administration);
		}
	}, [router.query]);
	// console.log(path);
	return (
		<div className={styles.container}>
			<div className={styles.contenu}>
				<div className={styles.entete}>
					<ul>
						<li
							className={elementAffiche === 'Élève' ? styles.active : ''}
							onClick={() => {
								changeElement('Élève');
								changeFormulaire('');
							}}>
							Élève
						</li>
						<li
							className={elementAffiche === 'Professeur' ? styles.active : ''}
							onClick={() => {
								changeElement('Professeur');
								changeFormulaire('');
							}}>
							Professeur
						</li>
						<li
							className={elementAffiche === 'Établissement' ? styles.active : ''}
							onClick={() => {
								changeElement('Établissement');
								changeFormulaire('');
							}}>
							Établissement
						</li>
						<li
							className={elementAffiche === 'Ville' ? styles.active : ''}
							onClick={() => {
								changeElement('Ville');
								changeFormulaire('');
							}}>
							Ville
						</li>
					</ul>
				</div>

				{elementAffiche === 'Élève' && (
					<div className={styles.entete}>
						<ul>
							<li
								className={formulaireAffiche === 'Inscrire' ? styles.active : ''}
								onClick={() => {
									// changeElement('');
									changeFormulaire('Inscrire');
								}}>
								Inscrire
							</li>
							<li
								className={formulaireAffiche === 'Modifier' ? styles.active : ''}
								onClick={() => {
									// changeElement('');
									changeFormulaire('Modifier');
								}}>
								Modifier
							</li>
							<li
								className={formulaireAffiche === 'Supprimer' ? styles.active : ''}
								onClick={() => {
									// changeElement('');
									changeFormulaire('Supprimer');
								}}>
								Supprimer
							</li>
						</ul>
					</div>
				)}
				{formulaireAffiche === 'Inscrire' && <AjouterEleve />}
				{formulaireAffiche === 'Modifier' && <UpdateEleve />}
				{formulaireAffiche === 'Supprimer' && <h2>Supprimer un eleve</h2>}

				{elementAffiche === 'Professeur' && (
					<div className={styles.entete}>
						<ul>
							<li
								className={formulaireAffiche === 'Ajouter un professeur' ? styles.active : ''}
								onClick={() => changeFormulaire('Ajouter un professeur')}>
								Ajouter un professeur
							</li>
							<li
								className={formulaireAffiche === 'Modifier les infos' ? styles.active : ''}
								onClick={() => changeFormulaire('Modifier les infos')}>
								Modifier les infos
							</li>
							<li
								className={formulaireAffiche === 'Supprimer un professeur' ? styles.active : ''}
								onClick={() => changeFormulaire('Supprimer un professeur')}>
								Supprimer un professeur
							</li>
						</ul>
					</div>
				)}
				{formulaireAffiche === 'Ajouter un professeur' && <h1>Ajouter un professeur</h1>}
				{formulaireAffiche === 'Modifier les infos' && <h2>Modifier les infos</h2>}
				{formulaireAffiche === 'Supprimer un professeur' && <h2>Supprimer un professeur</h2>}
				{elementAffiche === 'Établissement' && (
					<div className={styles.entete}>
						<ul>
							<li
								className={formulaireAffiche === 'Ajouter un Établissement' ? styles.active : ''}
								onClick={() => changeFormulaire('Ajouter un Établissement')}>
								Ajouter un Établissement
							</li>
							<li
								className={formulaireAffiche === 'Modifier les infos Établissement' ? styles.active : ''}
								onClick={() => changeFormulaire('Modifier les infos Établissement')}>
								Modifier les infos Établissement
							</li>
							<li
								className={formulaireAffiche === 'Supprimer un Établissement' ? styles.active : ''}
								onClick={() => changeFormulaire('Supprimer un Établissement')}>
								Supprimer un Établissement
							</li>
						</ul>
					</div>
				)}
				{formulaireAffiche === 'Ajouter un Établissement' && <h1>Ajouter un Établissement</h1>}
				{formulaireAffiche === 'Modifier les infos Établissement' && <h2>Modifier les infos Établissement</h2>}
				{formulaireAffiche === 'Supprimer un Établissement' && <h2>Supprimer un Établissement</h2>}
				{/* {formulaireAffiche === '' && <h2>Supprimer un Établissement</h2>} */}
			</div>
		</div>
	);
};

export default administration;
