import React from 'react';
import Accueil from '../components/Accueil';
import Head from 'next/head';

const Index = () => {
	return (
		<>
			<Head>
				<title>Accueil</title>
				<meta name='description' content="Page d'accueil contenant quelques projets et le contenu des autres pages du site" />
				<meta name='theme-color' content='#000000' />
				<meta property='og:title' content="Page d'accueil" />
				<meta property='og:description' content="Page d'accueil contenant quelques projets et le contenu des autres pages du site" />
				<meta property='og:image' content='http://localhost:3000/images/logoU.png' />
			</Head>
			<Accueil />
		</>
	);
};

export default Index;
