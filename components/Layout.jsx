import React from 'react';
// import Footer from './Footer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import styles from '../styles/Layout.module.css';
import { useTheme } from './ThemeProvider';
import Fondateur from '../components/Fondateur';
const Layout = (props) => {
	const router = useRouter();
	const [theme, setTheme] = useTheme();
	const [photo, setPhoto] = useState(false);
	const [photoToggle, setPhotoToggle] = useState(true);

	const [admin, setAdmin] = useState('');
	useEffect(() => {
		const { administration } = router.query;
		if (administration) {
			setAdmin(administration);
		}
	}, [router.query]);

	useEffect(() => {
		if (admin === 'admin') {
			setPhotoToggle(false);
		}
		console.log(admin);
	}, [admin]);
	const handleMouseOver = () => {
		setPhoto(true);
	};
	const handleMouseLeave = () => {
		setPhoto(false);
	};
	const togglePhoto = () => {
		setPhotoToggle(!photoToggle);
	};

	return (
		<div
			className={styles.layout}
			data-theme={theme}
			style={{
				backgroundColor: 'var(--CouleurFond)',
				width: '100vw',
				height: '100vh',
				display: 'flex',
				justifyContent: 'space-between',
				height: '100%',
				minHeight: '100vh',
				position: 'relative',
			}}>
			<Header />

			{props.children}
			<div className={styles.btnToggle} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={togglePhoto}>
				<svg viewBox='0 0 24 24'>
					<g id='SVGRepo_iconCarrier'>
						<path d='M12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V7C11.25 6.58579 11.5858 6.25 12 6.25Z'></path>
						<path d='M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z'></path>
						<path d='M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z'></path>
					</g>
				</svg>
				{photo && <span>{photoToggle ? 'Masquer' : 'Afficher'} le fondateur</span>}
			</div>
			{photoToggle && <Fondateur />}

			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
