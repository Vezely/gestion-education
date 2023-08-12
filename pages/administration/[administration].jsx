import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Administration.module.css';
import AjouterEleve from '../../components/AjouterEleve';
const administration = () => {
	const router = useRouter();
	const [path, setPath] = useState('');
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
						<li>Élève</li>
						<li>Professeur</li>
						<li>Établissement</li>
						<li>Ville</li>
					</ul>
				</div>
				<AjouterEleve />
			</div>
		</div>
	);
};

export default administration;
