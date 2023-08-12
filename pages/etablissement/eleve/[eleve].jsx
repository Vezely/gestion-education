import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styles from '../../../styles/Eleve.module.css';
import { useRouter } from 'next/router';

const Eleve = () => {
	const router = useRouter();
	const [eleve, setEleve] = useState([]);
	const [idEleve, setIdEleve] = useState('');

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
						<div>Modifier le profil</div>
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
