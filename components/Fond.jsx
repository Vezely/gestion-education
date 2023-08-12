import React from 'react';
import styles from '../styles/Fond.module.css';
import Image from 'next/image';
const Fond = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles.fond} `}>
				<Image src='/images/eleves.png' width={880} height={550} alt='image de fond' />
			</div>
		</div>
	);
};

export default Fond;
