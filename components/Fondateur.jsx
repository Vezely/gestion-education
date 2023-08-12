import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../styles/Fondateur.module.css';
import Link from 'next/link';

const Fondateur = () => {
	return (
		<div className={styles.fondateur}>
			<div className={styles.profil}>
				<h2>Le Fondateur</h2>
				<p className={styles.nom}>Kanté Vezely</p>
				<p>Développeur Web</p>
				<div className={styles.site}>
					<Link href='https://portfolio-vezely-kante.vercel.app/'>Visiter mon site</Link>
				</div>
			</div>
		</div>
	);
};

export default Fondateur;
