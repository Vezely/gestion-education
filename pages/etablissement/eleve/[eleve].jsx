import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styles from '../../../styles/Eleve.module.css';
import { useRouter } from 'next/router';

const Eleve = () => {
	const router = useRouter();
	const [eleve, setEleve] = useState([]);
	const [idEleve, setIdEleve] = useState('');
	const [file, setFile] = useState(null);
	const [msg, setMsg] = useState(null);

	const [btnEnregistrer, setbTnEnregistrer] = useState(false);
	const [imageDetecter, setbImageDetecter] = useState(false);
	useEffect(() => {
		const eleve = router.query.id;
		if (eleve) {
			setIdEleve(eleve);
		}
	}, [router.query]);

	useEffect(() => {
		async function fetchEleveData() {
			if (idEleve) {
				const query = `id_eleve=${idEleve}`;
				const response = await fetch(`/api/eleve?${query}`, {
					method: 'GET',
					headers: { 'Content-Type': 'application/json' },
				});
				const data = await response.json();
				setEleve(data);
			}
		}
		fetchEleveData();
	}, [idEleve]);

	useEffect(() => {
		const fileInput = document.getElementById('file-input');
		const handleFileChange = () => {
			if (fileInput.files.length > 0) {
				setbImageDetecter(false);
				setbTnEnregistrer(true);
			} else {
				setbImageDetecter(true);
			}

			// Votre logique pour mettre à jour `selectedFilename` ou tout autre code que vous souhaitez exécuter...
		};
		fileInput.addEventListener('change', handleFileChange);
		// Le nettoyage : c'est ce qui sera exécuté lorsque le composant sera démonté.
		return () => {
			fileInput.removeEventListener('change', handleFileChange);
		};
	}, []); // Le tableau vide signifie que cet effet s'exécutera une fois après le montage du composant et le nettoyage s'exécutera lors du démontage.

	const handleUpload = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		formData.append('id', router.query.id);
		try {
			const response = await fetch('/api/updateProfilEleve', {
				method: 'POST',
				body: formData,
			});
			const data = await response.json();
			if (data.error) {
				setMsg(data.error);
			} else {
				setFile(data.file);
				setMsg(data.msg);
				setbTnEnregistrer(false);
				window.location.reload();
			}
			console.log(description);
		} catch (error) {
			setMsg('An error occurred. Please try again.');
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.contenu}>
				<div className={styles.infoEleve}>
					<Image src='/images/cover.jpeg' width={1920} height={1134} alt='cover' priority={true} />
					{eleve.map((item) => (
						<div className={styles.imgProfile} key={item.id_eleve}>
							{item.eleve_img && <Image src={item.eleve_img} width={item.width} height={item.height} alt="phode de l'élève" />}
							{!item.eleve_img && <img src='https://via.placeholder.com/350x500?text=Votre+profile' alt='image de leleve' />}
						</div>
					))}
					<div className={styles.modifierProfile}>
						{/* <div>Modifier le profil</div> */}
						<form onSubmit={handleUpload} encType='multipart/form-data'>
							<input type='file' id='file-input' name='photo' hidden accept='image/*' />
							<label htmlFor='file-input' className={styles.file_input_label}>
								Modifier le profil
							</label>
							{imageDetecter && <span id='selected-filename'> Aucun fichier choisi</span>}
							{btnEnregistrer && <button type='submit'>Enregistrer</button>}
						</form>
					</div>
					{eleve.map((item) => (
						<h2 key={item.id_eleve}>
							{item.nom} {item.prenom}
						</h2>
					))}
					<details className={styles.commentaire}>
						<summary>Commentaire</summary>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequatur odio, blanditiis ea aliquid optio laudantium ut
						praesentium accusantium vel eveniet iure atque rem maxime ab quaerat voluptatum, beatae doloribus?
					</details>
					{eleve.map((item) => (
						<details className={styles.commentaire} key={item.id_eleve}>
							<summary>Informations</summary>
							<div className={styles.info} key={item.id_eleve}>
								<div>
									<div className={styles.titre}>Nom :</div>
									<div>{item.nom}</div>
								</div>
								<div>
									<div className={styles.titre}>Prénom :</div>
									<div>{item.prenom}</div>
								</div>
								<div>
									<div className={styles.titre}>Né le:</div>
									<div>{moment(item.date_naissance).format('DD MMMM YYYY')}</div>
								</div>
								<div>
									<div className={styles.titre}>Lieu de naissance:</div>
									<div>{item.lieu_naissance}</div>
								</div>
								<div>
									<div className={styles.titre}>Sexe:</div>
									<div>{item.sexe}</div>
								</div>
								<div>
									<div className={styles.titre}>Téléphone:</div>
									<div>{item.telephone}</div>
								</div>
								<div>
									<div className={styles.titre}>Classe:</div>
									<div>{item.nom_classe}</div>
								</div>
								<div>
									<div className={styles.titre}>Etablissement actuel:</div>
									<div>{item.nom_etablissement}</div>
								</div>
								<div>
									<div className={styles.titre}>Commune:</div>
									<div>{item.nom_commune}</div>
								</div>
							</div>
						</details>
					))}
				</div>
			</div>
		</div>
	);
};

export default Eleve;
