import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Communes.module.css';

const Communes = ({ nomCommune }) => {
	const router = useRouter();
	const [communes, setCommunes] = useState([]);
	// console.log(nomCommune);
	useEffect(() => {
		async function fetchMenus() {
			let response = await fetch('/api/communes', {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			});
			const data = await response.json();
			setCommunes(data);
		}
		fetchMenus();
	}, []);

	function tronquerTexte(texte, limite) {
		if (texte.length <= limite) {
			return texte;
		}
		return texte.substring(0, limite) + '...';
	}

	return (
		<div className={styles.contenuCommune}>
			{communes.map((commune) => (
				<Link href={'/commune/' + commune.nom_commune} className={styles.card} key={commune.id_commune}>
					<Image src={commune.commune_img} width={commune.width} height={commune.height} alt='image de la commune' priority={true} />

					<div className={styles.card_content}>
						<div className={styles.voir}>
							<span>Voir les détails</span>
						</div>
						<h2 className={styles.card_title}>
							Commune de <span>{commune.nom_commune}</span>
						</h2>
						<p className={styles.card_para}>{tronquerTexte(commune.description, 85)}</p>
						<div className={styles.infos}>
							<div className={styles.etablissement}>
								<svg width='24' height='24' className={styles.bulding}>
									<path d='M12 2h2v2h2v3.702l7 2.618v12.68h1v1h-24v-1h1v-11h6v-8h2v-2h2v-2h1v2zm3 3h-7v18h1v-2h5v2h1v-18zm-2 17h-3v1h3v-1zm8 1h1v-11.987l-6-2.243v14.23h1v-2h4v2zm-14-10h-5v10h1v-2h3v2h1v-10zm-2 9h-1v1h1v-1zm15 0h-2v1h2v-1zm-16-5v2h-1v-2h1zm2 0v2h-1v-2h1zm5-10v12h-1v-12h1zm10 11v1h-4v-1h4zm-8-11v12h-1v-12h1zm8 9v1h-4v-1h4zm-17-2v2h-1v-2h1zm2 0v2h-1v-2h1zm15 0v1h-4v-1h4zm0-2v1h-4v-1h4zm-8-9h-3v1h3v-1z' />
								</svg>
								<span>{commune.nombre_ecoles} Etablissements</span>
							</div>
							<div className={styles.eleves}>
								<svg width='30' height='30' viewBox='0 0 24 24'>
									<path d='M17.997 18h-.998c0-1.552.06-1.775-.88-1.993-1.438-.332-2.797-.645-3.293-1.729-.18-.396-.301-1.048.155-1.907 1.021-1.929 1.277-3.583.702-4.538-.672-1.115-2.707-1.12-3.385.017-.576.968-.316 2.613.713 4.512.465.856.348 1.51.168 1.908-.49 1.089-1.836 1.4-3.262 1.728-.982.227-.92.435-.92 2.002h-.995l-.002-.623c0-1.259.1-1.985 1.588-2.329 1.682-.389 3.344-.736 2.545-2.209-2.366-4.365-.676-6.839 1.865-6.839 2.492 0 4.227 2.383 1.867 6.839-.775 1.464.824 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.81-2.214c-1.289-.298-2.489-.559-1.908-1.657 1.77-3.342.47-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.325 0 1.269.574 2.175.904 2.925h1.048c-.17-.75-1.466-2.562-.766-3.736.412-.692 1.704-.693 2.114-.012.38.631.181 1.812-.534 3.161-.388.733-.28 1.301-.121 1.648.305.666.977.987 1.737 1.208 1.507.441 1.368.042 1.368 1.48h.997l.002-.463c0-.945-.074-1.492-1.193-1.75zm-22.805 2.214h.997c0-1.438-.139-1.039 1.368-1.48.761-.221 1.433-.542 1.737-1.208.159-.348.267-.915-.121-1.648-.715-1.349-.914-2.53-.534-3.161.41-.682 1.702-.681 2.114.012.7 1.175-.596 2.986-.766 3.736h1.048c.33-.75.904-1.656.904-2.925.001-1.509-.982-2.326-2.247-2.326-1.87 0-3.17 1.787-1.4 5.129.581 1.099-.619 1.359-1.908 1.657-1.12.258-1.194.805-1.194 1.751l.002.463z' />
								</svg>
								<span>{commune.nombre_eleves} Elèves</span>
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Communes;