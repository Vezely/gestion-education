import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styles from '../styles/CartCommune.module.css';

const TableauDeBord = () => {
	const router = useRouter();
	const [regions, setRegions] = useState([]);
	const { register, handleSubmit } = useForm();

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

	const tronquerTexte = (texte, limite) => {
		if (texte.length <= limite) {
			return texte;
		}
		return texte.substring(0, limite) + '...';
	};
	// console.log(router.query);
	const onSubmit = async (data) => {
		let response = await fetch(`/api/regions`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});

		if (response.ok) {
			const regionData = await response.json();
			setRegions(regionData);
		}
	};
	return (
		<>
			<Head>
				<title>{router.pathname.replace(/-/g, ' ').substring(1)}</title>
				<meta name='description' content="Page d'accueil contenant quelques projets et le contenu des autres pages du site" />
				<meta name='theme-color' content='#000000' />
				<meta property='og:title' content="Page d'accueil" />
				<meta property='og:description' content="Page d'accueil contenant quelques projets et le contenu des autres pages du site" />
				<meta property='og:image' content='http://localhost:3000/images/logoU.png' />
			</Head>

			<div className={styles.container}>
				<h1>Les régions de la Guinée</h1>
				<div className={styles.bar_recherche}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label htmlFor='recherche'>
							<input
								{...register('nom_region', { required: false })}
								type='search'
								name='nom_region'
								placeholder='Trouvez une région'
								onInput={handleSubmit(onSubmit)}
							/>
							<button type='submit'>
								<svg className={styles.svgSearch} viewBox='0 0 24 24' id='recherche'>
									<path d='m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z' />
								</svg>
							</button>
						</label>
					</form>
				</div>
				<div className={styles.contenu}>
					{/* <h2>Decouvrez les établissements scolaires de la commune de {nomCommune}</h2> */}

					{regions.map((region, index) => (
						<Link href={`/regions/${region.nom_region.toLowerCase()}`} className={`${styles.card}`} key={region.id_region}>
							<Image src={region.region_img} width={region.width} height={region.height} alt='image de la commune' priority={true} />
							<div className={styles.card_content}>
								<div className={styles.voir}>
									<span>Voir les détails</span>
								</div>
								<h1 className={styles.card_title}>
									Region de <span> {region.nom_region}</span>
								</h1>
								<p className={styles.card_para}>{tronquerTexte(region.description, 85)}</p>
							</div>
							<div className={styles.infos}>
								<div className={styles.etablissement}>
									<svg width='24' height='24' className={styles.bulding}>
										<path d='M12 2h2v2h2v3.702l7 2.618v12.68h1v1h-24v-1h1v-11h6v-8h2v-2h2v-2h1v2zm3 3h-7v18h1v-2h5v2h1v-18zm-2 17h-3v1h3v-1zm8 1h1v-11.987l-6-2.243v14.23h1v-2h4v2zm-14-10h-5v10h1v-2h3v2h1v-10zm-2 9h-1v1h1v-1zm15 0h-2v1h2v-1zm-16-5v2h-1v-2h1zm2 0v2h-1v-2h1zm5-10v12h-1v-12h1zm10 11v1h-4v-1h4zm-8-11v12h-1v-12h1zm8 9v1h-4v-1h4zm-17-2v2h-1v-2h1zm2 0v2h-1v-2h1zm15 0v1h-4v-1h4zm0-2v1h-4v-1h4zm-8-9h-3v1h3v-1z' />
									</svg>
									<span>
										{region.nb_communes} {region.nom_region === 'Conakry' ? 'Communes' : 'Villes'}
									</span>
								</div>
								<div className={styles.eleves}>
									{/* <svg width='30' height='30' viewBox='0 0 24 24'>
											<path d='M17.997 18h-.998c0-1.552.06-1.775-.88-1.993-1.438-.332-2.797-.645-3.293-1.729-.18-.396-.301-1.048.155-1.907 1.021-1.929 1.277-3.583.702-4.538-.672-1.115-2.707-1.12-3.385.017-.576.968-.316 2.613.713 4.512.465.856.348 1.51.168 1.908-.49 1.089-1.836 1.4-3.262 1.728-.982.227-.92.435-.92 2.002h-.995l-.002-.623c0-1.259.1-1.985 1.588-2.329 1.682-.389 3.344-.736 2.545-2.209-2.366-4.365-.676-6.839 1.865-6.839 2.492 0 4.227 2.383 1.867 6.839-.775 1.464.824 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.81-2.214c-1.289-.298-2.489-.559-1.908-1.657 1.77-3.342.47-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.325 0 1.269.574 2.175.904 2.925h1.048c-.17-.75-1.466-2.562-.766-3.736.412-.692 1.704-.693 2.114-.012.38.631.181 1.812-.534 3.161-.388.733-.28 1.301-.121 1.648.305.666.977.987 1.737 1.208 1.507.441 1.368.042 1.368 1.48h.997l.002-.463c0-.945-.074-1.492-1.193-1.75zm-22.805 2.214h.997c0-1.438-.139-1.039 1.368-1.48.761-.221 1.433-.542 1.737-1.208.159-.348.267-.915-.121-1.648-.715-1.349-.914-2.53-.534-3.161.41-.682 1.702-.681 2.114.012.7 1.175-.596 2.986-.766 3.736h1.048c.33-.75.904-1.656.904-2.925.001-1.509-.982-2.326-2.247-2.326-1.87 0-3.17 1.787-1.4 5.129.581 1.099-.619 1.359-1.908 1.657-1.12.258-1.194.805-1.194 1.751l.002.463z' />
										</svg> */}
									<span>{region.nb_etablissements} Établissements</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default TableauDeBord;
