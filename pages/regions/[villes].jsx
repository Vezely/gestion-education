import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styles from '../../styles/Villes.module.css';

const Villes = () => {
	const router = useRouter();
	const [villes, setVilles] = useState([]);
	const [nomRegion, setNomRegion] = useState('');
	const { register, handleSubmit } = useForm();
	useEffect(() => {
		const { villes } = router.query;
		if (villes) {
			setNomRegion(villes);
		}
	}, [router.query]);

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

	const tronquerTexte = (texte, limite) => {
		if (texte.length <= limite) {
			return texte;
		}
		return texte.substring(0, limite) + '...';
	};
	// console.log(villes);

	const onSubmit = async (data) => {
		let response = await fetch(`/api/communesCherchee?nom_region=${nomRegion}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});

		if (response.ok) {
			const villesData = await response.json();
			setVilles(villesData);
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
				<h1>
					Les {nomRegion == 'conakry' ? 'communes' : 'villes'} de {nomRegion.charAt(0).toUpperCase() + nomRegion.slice(1)}
				</h1>
				<div className={styles.bar_recherche}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label htmlFor='recherche'>
							<input
								{...register('nom_commune', { required: false })}
								type='search'
								name='nom_commune'
								placeholder={`Trouvez une ${nomRegion == 'conakry' ? 'commune' : 'ville'}`}
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
					{villes.map((commune) => (
						<div className={styles.card} key={commune.id_commune}>
							<Link href={'/commune/' + commune.nom_commune.toLowerCase()} className={styles.card_content}>
								<Image src={commune.commune_img} width={commune.width} height={commune.height} alt='image de la commune' priority={true} />
								<div className={styles.voir}>
									<span>Voir les détails</span>
								</div>
							</Link>
							<div className={styles.card_content}>
								<h1 className={styles.card_title}>
									Commune de <span> {commune.nom_commune}</span>
								</h1>
								<p className={styles.card_para}>{tronquerTexte(commune.description, 85)}</p>
							</div>
							<div className={styles.infos}>
								<div className={styles.etablissement}>
									<svg width='24' height='24' className={styles.bulding}>
										<path d='M12 2h2v2h2v3.702l7 2.618v12.68h1v1h-24v-1h1v-11h6v-8h2v-2h2v-2h1v2zm3 3h-7v18h1v-2h5v2h1v-18zm-2 17h-3v1h3v-1zm8 1h1v-11.987l-6-2.243v14.23h1v-2h4v2zm-14-10h-5v10h1v-2h3v2h1v-10zm-2 9h-1v1h1v-1zm15 0h-2v1h2v-1zm-16-5v2h-1v-2h1zm2 0v2h-1v-2h1zm5-10v12h-1v-12h1zm10 11v1h-4v-1h4zm-8-11v12h-1v-12h1zm8 9v1h-4v-1h4zm-17-2v2h-1v-2h1zm2 0v2h-1v-2h1zm15 0v1h-4v-1h4zm0-2v1h-4v-1h4zm-8-9h-3v1h3v-1z' />
									</svg>

									<span>{commune.nombre_ecoles} Etablissements</span>
								</div>
								<div className={styles.eleves}>
									<svg height='24px' width='24px' version='1.1' viewBox='0 0 151.045 151.045'>
										<g id='SVGRepo_iconCarrier'>
											<g>
												<path d='M151.042,109.495c0-11.42-8.16-21.158-19.566-24.912c1.8-2.172,3.196-4.724,4.101-7.179 c1.546-0.927,2.759-2.598,3.242-4.542c0.44-1.768,1.414-5.64-0.666-7.752v-1.739c0.086-2.985,0.322-10.744-6.138-14.097 c-0.168-0.623-0.211-1.113-0.222-1.217l-0.816-8.296l-5.948,5.612c-0.698,0.537-4.656,1.51-8.382,1.886l-1.528,0.236 c-11.374,1.789-11.191,8.353-11.048,13.635c0.021,0.673,0.043,1.385,0.043,2.183l0.05,1.564c-1.145,1.263-1.958,3.579-0.902,7.891 c0.483,1.929,1.725,3.593,3.242,4.413c0.701,1.8,2.09,4.771,4.252,7.423c-4.824,1.585-9.054,4.245-12.336,7.655 c-3.06-1.958-6.456-3.514-10.085-4.642c2.684-3.049,4.713-6.782,6.005-10.329c2.011-1.131,3.607-3.285,4.252-5.823 c0.569-2.301,1.847-7.401-0.909-9.953v-2.609c0.183-6.138-0.49-14.638-8.124-18.424c-0.315-1.063-0.372-1.893-0.379-1.986 l-0.973-9.878l-7.093,6.682c-0.845,0.769-6.274,2.133-11.499,2.656l-2.044,0.322c-14.691,2.312-14.469,10.443-14.262,17.93 c0.025,0.82,0.047,1.671,0.047,2.62l0.072,2.337c-1.503,1.51-2.63,4.445-1.231,10.171c0.623,2.509,2.265,4.66,4.234,5.633 c0.966,2.498,2.985,6.929,6.249,10.661c-3.629,1.113-7.007,2.677-10.067,4.627c-3.293-3.425-7.541-6.08-12.376-7.669 c1.797-2.18,3.192-4.724,4.101-7.186c1.56-0.923,2.745-2.57,3.246-4.549c0.44-1.768,1.403-5.633-0.666-7.745v-1.739 c0.086-2.985,0.319-10.744-6.141-14.097c-0.168-0.623-0.208-1.113-0.218-1.217l-0.82-8.296l-5.948,5.612 c-0.698,0.537-4.66,1.51-8.382,1.886l-1.525,0.236c-11.377,1.789-11.191,8.353-11.048,13.632c0.021,0.673,0.039,1.385,0.039,2.187 l0.05,1.56c-1.145,1.26-1.954,3.579-0.898,7.891c0.48,1.929,1.725,3.593,3.239,4.416c0.705,1.793,2.094,4.771,4.252,7.415 C8.142,88.362,0,98.086,0,109.491v1.789h37.599c-0.934,2.985-1.474,6.109-1.474,9.359v1.789h78.792v-1.789 c0-3.25-0.537-6.374-1.474-9.359h37.603v-1.786H151.042z M136.862,107.706v-5.01c0-0.984-0.805-1.789-1.789-1.789 s-1.789,0.805-1.789,1.789v5.01h-21.201c-0.873-1.943-1.95-3.797-3.196-5.551c-0.193-0.279-0.369-0.565-0.565-0.83 c-1.95-2.602-4.298-4.942-6.939-6.989c1.664-1.657,3.59-3.103,5.733-4.277l12.701,14.419c0.344,0.383,0.827,0.608,1.342,0.608 c0.565-0.029,1.02-0.222,1.364-0.63l12.429-14.527c6.954,3.761,11.774,10.261,12.444,17.776L136.862,107.706L136.862,107.706z M111.277,118.854H95.942v-7.312c0-0.089-0.036-0.168-0.054-0.258c-0.129-0.859-0.834-1.532-1.736-1.532 c-0.895,0-1.607,0.673-1.736,1.532c-0.011,0.089-0.054,0.168-0.054,0.258v7.312H58.661v-7.312c0-0.089-0.039-0.168-0.054-0.258 c-0.129-0.859-0.837-1.532-1.736-1.532s-1.61,0.673-1.739,1.532c-0.011,0.089-0.05,0.168-0.05,0.258v7.312H39.75 c0.168-2.627,0.744-5.15,1.61-7.569c0.215-0.601,0.433-1.202,0.691-1.789h0.054c-0.007-0.029-0.011-0.05-0.018-0.075 c0.254-0.573,0.523-1.145,0.816-1.714c0.773-1.489,1.686-2.902,2.702-4.255c1.789-2.384,3.933-4.531,6.374-6.403 c0.476-0.365,0.938-0.734,1.435-1.084c0.487-0.336,1.002-0.637,1.507-0.945c0.644-0.397,1.292-0.784,1.965-1.138l17.304,19.648 c0.34,0.383,0.827,0.601,1.342,0.601c0.004,0,0.007,0,0.011,0c0.523,0,1.009-0.229,1.349-0.623l16.935-19.787 c0.784,0.404,1.539,0.837,2.28,1.299c0.508,0.308,1.02,0.608,1.51,0.945c0.497,0.351,0.963,0.719,1.432,1.084 c2.441,1.872,4.581,4.019,6.37,6.403c1.016,1.364,1.933,2.766,2.706,4.255c0.29,0.558,0.558,1.131,0.816,1.714 c-0.007,0.036-0.014,0.057-0.014,0.075h0.054c0.254,0.587,0.476,1.188,0.687,1.789 C110.529,113.704,111.102,116.227,111.277,118.854z M15.947,100.906c-0.988,0-1.789,0.798-1.789,1.789v5.01H3.643 c0.659-7.43,5.372-13.875,12.2-17.658l12.712,14.419c0.34,0.383,0.827,0.608,1.342,0.608c0.372-0.029,1.016-0.222,1.36-0.63 l12.426-14.527c2.23,1.21,4.241,2.691,5.962,4.402c-2.641,2.047-4.992,4.391-6.939,6.989c-0.204,0.265-0.376,0.551-0.573,0.83 c-1.238,1.746-2.312,3.607-3.192,5.551H17.74v-5.01C17.737,101.7,16.939,100.906,15.947,100.906z M18.034,74.394l-0.859-0.258 c-0.601-0.183-1.403-1.07-1.689-2.23c-0.712-2.92-0.351-4.37,0.225-4.753l0.83-0.551l-0.104-3.343c0-0.784-0.018-1.532-0.039-2.23 c-0.147-5.243-0.24-8.697,8.027-9.996l1.421-0.229c0.082-0.007,8.274-0.841,10.357-2.799l0.673-0.641l0.097,0.998 c0.025,0.329,0.14,1.503,0.648,2.831l0.268,0.705l0.691,0.301c3.504,1.517,4.924,4.824,4.735,11.119v3.697l0.913,0.519 c0.2,0.111,0.777,0.762-0.143,4.452c-0.293,1.16-1.038,2.14-1.9,2.494l-0.755,0.308l-0.258,0.777 c-0.948,2.795-2.609,5.816-4.842,7.988c-0.587,0.573-1.213,1.077-1.879,1.503c-1.299,0.837-2.738,1.378-4.313,1.424 c-0.039,0-0.075,0.014-0.111,0.014c-0.05,0-0.097-0.007-0.15-0.007c-0.047,0-0.086,0.007-0.132,0.007 c-0.132,0-0.247-0.057-0.376-0.064c-1.546-0.097-2.938-0.58-4.148-1.371c-0.669-0.433-1.281-0.945-1.854-1.503 c-2.799-2.756-4.434-6.696-5.028-8.332L18.034,74.394z M32.564,97.423L31,91.279l1.882-1.621c1.621-0.44,3.099-1.217,4.427-2.23 c1.024,0.265,2.011,0.594,2.978,0.966L32.564,97.423z M26.494,89.589l1.972,1.693l-1.514,5.955l-7.709-8.75 c1.024-0.397,2.072-0.762,3.164-1.041C23.61,88.373,24.966,89.121,26.494,89.589z M59.191,74.165l-0.859-0.258 c-0.959-0.293-2.222-1.582-2.677-3.418c-0.888-3.629-0.68-6.188,0.558-7.004l0.827-0.548l-0.122-4.159 c0-0.931-0.025-1.818-0.054-2.97c-0.197-7.068-0.34-12.157,11.252-13.983l1.943-0.308c0.107-0.018,10.898-1.145,13.496-3.604 l1.804-1.693l0.247,2.573c0.025,0.293,0.154,1.857,0.83,3.633l0.268,0.701l0.687,0.301c6.224,2.691,6.882,9.287,6.7,15.432v4.599 l0.916,0.523c1.016,0.573,1.056,2.802,0.093,6.632c-0.437,1.729-1.575,3.207-2.906,3.754l-0.755,0.308l-0.258,0.777 c-1.321,3.919-3.686,8.163-6.871,11.162c-0.573,0.537-1.167,1.027-1.797,1.474c-0.823,0.587-1.704,1.07-2.613,1.453 c-1.092,0.455-2.23,0.748-3.436,0.852c-0.329,0.029-0.633,0.125-0.97,0.125c-0.476,0-0.934-0.057-1.389-0.104 c-1.117-0.14-2.169-0.433-3.157-0.852c-0.913-0.39-1.764-0.888-2.566-1.46c-0.626-0.455-1.231-0.938-1.789-1.467 c-3.987-3.797-6.284-9.33-7.111-11.61L59.191,74.165z M79.282,105.211l-2.276-8.947l3.167-2.713l-0.211-0.183 c1.95-0.623,3.74-1.621,5.361-2.895c1.768,0.44,3.475,1.013,5.125,1.686L79.282,105.211z M70.754,93.286l-0.304,0.265l3.16,2.713 l-2.205,8.689L60.254,92.295c1.732-0.712,3.529-1.328,5.404-1.811C67.164,91.679,68.864,92.656,70.754,93.286z M109.295,74.394 l-0.859-0.258c-0.605-0.19-1.406-1.07-1.693-2.23c-0.712-2.92-0.351-4.37,0.222-4.753l0.83-0.551l-0.104-3.343 c0-0.784-0.018-1.532-0.039-2.237c-0.143-5.236-0.233-8.689,8.027-9.989l1.424-0.229c0.075-0.007,8.267-0.841,10.35-2.799 l0.673-0.641l0.097,0.998c0.025,0.329,0.14,1.496,0.644,2.831l0.268,0.705l0.694,0.301c3.504,1.517,4.924,4.824,4.731,11.119v3.697 l0.916,0.519c0.2,0.111,0.78,0.762-0.147,4.452c-0.293,1.16-1.034,2.14-1.897,2.494l-0.755,0.308l-0.258,0.777 c-0.948,2.795-2.609,5.816-4.842,7.988c-0.587,0.573-1.217,1.077-1.879,1.503c-1.299,0.837-2.741,1.378-4.313,1.424l0.021,0.021 c-0.043,0-0.082-0.007-0.125-0.007c-0.057,0-0.1-0.007-0.154-0.007c-0.047,0-0.086,0.007-0.132,0.007 c-0.132,0-0.247-0.057-0.376-0.064c-1.546-0.097-2.935-0.58-4.151-1.371c-0.666-0.433-1.278-0.945-1.85-1.503 c-2.802-2.756-4.434-6.696-5.028-8.332L109.295,74.394z M123.817,97.423l-1.564-6.145l1.882-1.621 c1.621-0.447,3.096-1.217,4.431-2.23c1.016,0.265,2.011,0.594,2.97,0.966L123.817,97.423z M117.755,89.589l1.968,1.693 l-1.514,5.955l-7.709-8.75c1.024-0.397,2.072-0.762,3.164-1.041C114.863,88.373,116.227,89.128,117.755,89.589z'></path>{' '}
											</g>
										</g>
									</svg>
									<span>{commune.nombre_eleves} Elèves</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Villes;