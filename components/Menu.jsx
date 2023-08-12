import Link from 'next/link';
import styles from '../styles/Menu.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Menu({ responsiveMenu, setResponsiveMenu }) {
	const router = useRouter();
	const getActiveClass = (path) => {
		return router.pathname === path ? styles.active : '';
	};

	const [path, setPath] = useState('');
	useEffect(() => {
		const { administration } = router.query;
		if (administration) {
			setPath(administration);
		}
	}, [router.query]);
	useEffect(() => {
		if (path === 'admin') {
			setResponsiveMenu(true);
			console.log(path);
		}
	}, [path]);

	// console.log(router.query);
	return (
		<nav className={`${styles.nav} ${responsiveMenu ? styles.navToggle : ''}`}>
			<ul className={`${styles.ul} ${responsiveMenu ? styles.menuToggle : ''}`}>
				<li className={`${styles.li} ${getActiveClass('/communes')}`}>
					<Link href='/'>
						<svg viewBox='0 -0.5 25 25'>
							<g id='SVGRepo_iconCarrier'>
								<path d='M9.41728 18.9999C9.41728 19.4142 9.75307 19.7499 10.1673 19.7499C10.5815 19.7499 10.9173 19.4142 10.9173 18.9999H9.41728ZM10.1673 16.6669H9.41728H10.1673ZM14.0853 18.9999C14.0853 19.4142 14.4211 19.7499 14.8353 19.7499C15.2495 19.7499 15.5853 19.4142 15.5853 18.9999H14.0853ZM10.1673 19.7499C10.5815 19.7499 10.9173 19.4142 10.9173 18.9999C10.9173 18.5857 10.5815 18.2499 10.1673 18.2499V19.7499ZM7.83328 18.9999L7.82564 19.7499H7.83328V18.9999ZM5.80128 17.2529L5.0518 17.2807C5.05294 17.3116 5.056 17.3424 5.06095 17.373L5.80128 17.2529ZM5.53228 9.99395L6.28177 9.96617C6.2805 9.93188 6.27687 9.8977 6.27092 9.8639L5.53228 9.99395ZM6.64428 7.74195L6.3033 7.07392L6.29848 7.07642L6.64428 7.74195ZM11.5793 5.22295L11.9203 5.89096L11.9218 5.89017L11.5793 5.22295ZM13.4243 5.22295L13.0818 5.89017L13.0833 5.89096L13.4243 5.22295ZM18.3593 7.74195L18.7051 7.07641L18.7003 7.07394L18.3593 7.74195ZM19.4713 9.99395L18.7326 9.8639C18.7267 9.89767 18.7231 9.93181 18.7218 9.96607L19.4713 9.99395ZM19.2013 17.2529L19.9416 17.373C19.9466 17.3425 19.9496 17.3117 19.9508 17.2808L19.2013 17.2529ZM17.1693 18.9999V19.75L17.1769 19.7499L17.1693 18.9999ZM14.8353 18.2499C14.4211 18.2499 14.0853 18.5857 14.0853 18.9999C14.0853 19.4142 14.4211 19.7499 14.8353 19.7499V18.2499ZM10.1673 18.2499C9.75307 18.2499 9.41728 18.5857 9.41728 18.9999C9.41728 19.4142 9.75307 19.7499 10.1673 19.7499V18.2499ZM14.8353 19.7499C15.2495 19.7499 15.5853 19.4142 15.5853 18.9999C15.5853 18.5857 15.2495 18.2499 14.8353 18.2499V19.7499ZM10.9173 18.9999V16.6669H9.41728V18.9999H10.9173ZM10.9173 16.6669C10.9173 15.7921 11.6265 15.0829 12.5013 15.0829V13.5829C10.798 13.5829 9.41728 14.9637 9.41728 16.6669H10.9173ZM12.5013 15.0829C13.3761 15.0829 14.0853 15.7921 14.0853 16.6669H15.5853C15.5853 14.9637 14.2045 13.5829 12.5013 13.5829V15.0829ZM14.0853 16.6669V18.9999H15.5853V16.6669H14.0853ZM10.1673 18.2499H7.83328V19.7499H10.1673V18.2499ZM7.84092 18.25C7.1937 18.2434 6.64521 17.7718 6.54162 17.1329L5.06095 17.373C5.28137 18.7325 6.44847 19.7359 7.82564 19.7499L7.84092 18.25ZM6.55077 17.2252L6.28177 9.96617L4.7828 10.0217L5.0518 17.2807L6.55077 17.2252ZM6.27092 9.8639C6.16697 9.27348 6.45811 8.68388 6.99008 8.40747L6.29848 7.07642C5.18533 7.65481 4.57613 8.88855 4.79364 10.124L6.27092 9.8639ZM6.98526 8.40996L11.9203 5.89096L11.2383 4.55494L6.30331 7.07394L6.98526 8.40996ZM11.9218 5.89017C12.2859 5.70328 12.7177 5.70328 13.0818 5.89017L13.7668 4.55573C12.9727 4.14809 12.0309 4.14809 11.2368 4.55573L11.9218 5.89017ZM13.0833 5.89096L18.0183 8.40996L18.7003 7.07394L13.7653 4.55494L13.0833 5.89096ZM18.0135 8.40747C18.5455 8.68388 18.8366 9.27348 18.7326 9.8639L20.2099 10.124C20.4274 8.88855 19.8182 7.65481 18.7051 7.07642L18.0135 8.40747ZM18.7218 9.96607L18.4518 17.2251L19.9508 17.2808L20.2208 10.0218L18.7218 9.96607ZM18.461 17.1329C18.3574 17.7718 17.8089 18.2434 17.1616 18.25L17.1769 19.7499C18.5541 19.7359 19.7212 18.7325 19.9416 17.373L18.461 17.1329ZM17.1693 18.2499H14.8353V19.7499H17.1693V18.2499ZM10.1673 19.7499H14.8353V18.2499H10.1673V19.7499Z'></path>
							</g>
						</svg>
						<span className={`${responsiveMenu ? styles.texteSpan : ''}`}>Tableau de bord</span>
					</Link>
					{responsiveMenu && (
						<div className={styles.focus2}>
							<span></span>
							<div>Tableau de bord</div>
						</div>
					)}
				</li>
				<li className={`${styles.li} ${getActiveClass('/regions')}`}>
					<Link href='/regions'>
						<svg viewBox='0 0 24 24'>
							<g id='SVGRepo_iconCarrier'>
								<path d='M6.37217 14.4714C6.48453 14.0727 6.25241 13.6584 5.85373 13.5461C5.45504 13.4337 5.04076 13.6659 4.92841 14.0645L6.37217 14.4714ZM5.04129 16.429L4.31941 16.2255C4.31158 16.2533 4.30536 16.2815 4.30078 16.31L5.04129 16.429ZM6.04129 18.257L5.92506 18.9979C5.9621 19.0037 5.99953 19.0067 6.03702 19.007L6.04129 18.257ZM9.52429 17.151L9.13258 16.5114C9.11741 16.5207 9.10259 16.5305 9.08812 16.5408L9.52429 17.151ZM13.9463 13.6L13.417 13.0686C13.4134 13.0722 13.4099 13.0758 13.4064 13.0794L13.9463 13.6ZM17.3463 9.18097L16.7314 8.7516C16.7192 8.76907 16.7077 8.78706 16.697 8.80551L17.3463 9.18097ZM18.2163 5.85197L18.9627 5.77837C18.9581 5.73231 18.9493 5.68678 18.9364 5.64234L18.2163 5.85197ZM16.1703 5.09097L16.0054 4.35933C15.9778 4.36555 15.9505 4.37334 15.9238 4.38264L16.1703 5.09097ZM14.1738 4.99164C13.7826 5.12777 13.5758 5.55527 13.712 5.94647C13.8481 6.33767 14.2756 6.54444 14.6668 6.40831L14.1738 4.99164ZM14.4203 5.69997L14.1723 6.4078L14.1732 6.40811L14.4203 5.69997ZM6.69279 8.04127L7.2919 8.49245L6.69279 8.04127ZM6.57704 16.1148L7.18884 15.681L6.57704 16.1148ZM14.2342 18.6767L14.0067 17.9621L14.2342 18.6767ZM19.0003 12.159L18.2503 12.1578V12.1588L19.0003 12.159ZM4.92841 14.0645L4.31941 16.2255L5.76317 16.6324L6.37217 14.4714L4.92841 14.0645ZM4.30078 16.31C4.20202 16.9248 4.23467 17.5384 4.51377 18.0491C4.81153 18.594 5.32443 18.9037 5.92506 18.9979L6.15752 17.516C5.94215 17.4822 5.87055 17.4039 5.83006 17.3298C5.77091 17.2216 5.71156 16.9851 5.7818 16.5479L4.30078 16.31ZM6.03702 19.007C7.44336 19.015 8.81637 18.579 9.96046 17.7611L9.08812 16.5408C8.2009 17.1751 7.13616 17.5132 6.04556 17.507L6.03702 19.007ZM9.916 17.7905C11.5889 16.766 13.1246 15.5327 14.4862 14.1205L13.4064 13.0794C12.1331 14.4 10.697 15.5533 9.13258 16.5114L9.916 17.7905ZM14.4756 14.1313C15.8446 12.7675 17.0281 11.2293 17.9955 9.55644L16.697 8.80551C15.7955 10.3644 14.6927 11.7977 13.417 13.0686L14.4756 14.1313ZM17.9612 9.61034C18.7412 8.49326 19.0964 7.13424 18.9627 5.77837L17.4699 5.92557C17.5685 6.92551 17.3066 7.92777 16.7314 8.7516L17.9612 9.61034ZM18.9364 5.64234C18.7642 5.05066 18.3646 4.61054 17.7898 4.39659C17.2548 4.19744 16.6346 4.21748 16.0054 4.35933L16.3352 5.82261C16.815 5.71447 17.1098 5.744 17.2665 5.80235C17.3835 5.8459 17.4524 5.91129 17.4962 6.0616L18.9364 5.64234ZM15.9238 4.38264L14.1738 4.99164L14.6668 6.40831L16.4168 5.79931L15.9238 4.38264ZM14.6682 4.99214C11.5493 3.89955 8.08177 4.95014 6.09367 7.59009L7.2919 8.49245C8.88719 6.37409 11.6696 5.53108 14.1723 6.4078L14.6682 4.99214ZM6.09367 7.59009C4.10558 10.23 4.05364 13.8528 5.96524 16.5487L7.18884 15.681C5.65493 13.5178 5.6966 10.6108 7.2919 8.49245L6.09367 7.59009ZM5.96524 16.5487C7.87684 19.2445 11.3128 20.3941 14.4618 19.3913L14.0067 17.9621C11.4798 18.7667 8.72275 17.8442 7.18884 15.681L5.96524 16.5487ZM14.4618 19.3913C17.6108 18.3886 19.7495 15.464 19.7503 12.1592L18.2503 12.1588C18.2496 14.8106 16.5335 17.1574 14.0067 17.9621L14.4618 19.3913ZM19.7503 12.1601C19.7551 8.93213 17.7151 6.05522 14.6674 4.99184L14.1732 6.40811C16.6179 7.26106 18.2542 9.56866 18.2503 12.1578L19.7503 12.1601Z'></path>
							</g>
						</svg>

						<span className={`${responsiveMenu ? styles.texteSpan : ''}`}>Régions</span>
					</Link>
					{responsiveMenu && (
						<div className={styles.focus2}>
							<span></span>
							<div>Régions</div>
						</div>
					)}
				</li>
				<li className={`${styles.li} ${getActiveClass('/statistiques')} `}>
					<Link href='/statistiques'>
						<svg viewBox='0 -0.5 25 25'>
							<g id='SVGRepo_iconCarrier'>
								<path d='M5.11413 8.35688C4.75894 8.56999 4.64377 9.03069 4.85688 9.38587C5.06999 9.74106 5.53069 9.85623 5.88587 9.64312L5.11413 8.35688ZM10.5 6L10.95 5.4C10.7061 5.21704 10.3756 5.19999 10.1141 5.35688L10.5 6ZM14.5 9L14.05 9.6C14.3236 9.80522 14.7014 9.79932 14.9685 9.58565L14.5 9ZM19.9685 5.58565C20.292 5.32689 20.3444 4.85493 20.0857 4.53148C19.8269 4.20803 19.3549 4.15559 19.0315 4.41435L19.9685 5.58565ZM17.75 19C17.75 19.4142 18.0858 19.75 18.5 19.75C18.9142 19.75 19.25 19.4142 19.25 19H17.75ZM19.25 11C19.25 10.5858 18.9142 10.25 18.5 10.25C18.0858 10.25 17.75 10.5858 17.75 11H19.25ZM9.75 19C9.75 19.4142 10.0858 19.75 10.5 19.75C10.9142 19.75 11.25 19.4142 11.25 19H9.75ZM11.25 11C11.25 10.5858 10.9142 10.25 10.5 10.25C10.0858 10.25 9.75 10.5858 9.75 11H11.25ZM13.75 19C13.75 19.4142 14.0858 19.75 14.5 19.75C14.9142 19.75 15.25 19.4142 15.25 19H13.75ZM15.25 14C15.25 13.5858 14.9142 13.25 14.5 13.25C14.0858 13.25 13.75 13.5858 13.75 14H15.25ZM5.75 19C5.75 19.4142 6.08579 19.75 6.5 19.75C6.91421 19.75 7.25 19.4142 7.25 19H5.75ZM7.25 14C7.25 13.5858 6.91421 13.25 6.5 13.25C6.08579 13.25 5.75 13.5858 5.75 14H7.25ZM5.88587 9.64312L10.8859 6.64312L10.1141 5.35688L5.11413 8.35688L5.88587 9.64312ZM10.05 6.6L14.05 9.6L14.95 8.4L10.95 5.4L10.05 6.6ZM14.9685 9.58565L19.9685 5.58565L19.0315 4.41435L14.0315 8.41435L14.9685 9.58565ZM19.25 19V11H17.75V19H19.25ZM11.25 19V11H9.75V19H11.25ZM15.25 19V14H13.75V19H15.25ZM7.25 19V14H5.75V19H7.25Z'></path>
							</g>
						</svg>
						<span className={`${responsiveMenu ? styles.texteSpan : ''}`}>Statistiques</span>
					</Link>
					{responsiveMenu && (
						<div className={styles.focus2}>
							<span></span>
							<div>Statistiques</div>
						</div>
					)}
				</li>
				<li className={`${styles.li} ${getActiveClass('/ecoles-populaires')}`}>
					<Link href='/ecoles-populaires'>
						<svg viewBox='0 0 24 24'>
							<g id='SVGRepo_iconCarrier'>
								<path d='M7 1.25C7.41421 1.25 7.75 1.58579 7.75 2V3.75H8C8.01496 3.75 8.02987 3.75 8.04475 3.75C8.47757 3.74995 8.8744 3.7499 9.19721 3.7933C9.55269 3.84109 9.92841 3.95354 10.2374 4.26256C10.5465 4.57159 10.6589 4.94731 10.7067 5.30279C10.7501 5.62561 10.7501 6.02244 10.75 6.45526C10.75 6.47013 10.75 6.48504 10.75 6.5V7.88206C10.8169 7.93503 10.8818 7.99268 10.9445 8.05546C11.4 8.51093 11.5857 9.07773 11.6701 9.70552C11.7284 10.139 11.7442 10.6545 11.7484 11.25H12.25L12.25 7.71C12.25 6.45165 12.2499 5.42299 12.3656 4.6381C12.4856 3.82422 12.7528 3.09753 13.4336 2.62571C14.1145 2.15388 14.8887 2.15884 15.6929 2.33231C16.4684 2.49959 17.4316 2.8608 18.6098 3.30267L18.7057 3.33862C19.3012 3.56191 19.8051 3.75085 20.2009 3.95182C20.6219 4.16555 20.9859 4.42361 21.2603 4.81961C21.5347 5.21562 21.6486 5.647 21.7009 6.11624C21.75 6.55746 21.75 7.0956 21.75 7.73158V21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22C1.25 21.5858 1.58579 21.25 2 21.25H2.25L2.25 11.948C2.24997 11.0495 2.24994 10.3003 2.32991 9.70552C2.41432 9.07773 2.59999 8.51093 3.05546 8.05546C3.11823 7.99268 3.18313 7.93503 3.25 7.88206V6.5C3.25 6.48504 3.25 6.47013 3.25 6.45525C3.24995 6.02243 3.2499 5.6256 3.2933 5.30279C3.34109 4.94731 3.45354 4.57159 3.76256 4.26256C4.07159 3.95354 4.44731 3.84109 4.80279 3.7933C5.1256 3.7499 5.52243 3.74995 5.95525 3.75C5.97012 3.75 5.98504 3.75 6 3.75H6.25V2C6.25 1.58579 6.58579 1.25 7 1.25ZM4.75 7.32412C5.33751 7.24995 6.07178 7.24997 6.94801 7.25H7.05199C7.92822 7.24997 8.66249 7.24995 9.25 7.32412V6.5C9.25 6.00739 9.24841 5.71339 9.22008 5.50266C9.20709 5.40611 9.1918 5.35774 9.18284 5.33596C9.18077 5.33092 9.17915 5.3276 9.17814 5.32567L9.17676 5.32324L9.17433 5.32186C9.1724 5.32085 9.16908 5.31923 9.16404 5.31716C9.14226 5.3082 9.09389 5.29291 8.99734 5.27992C8.78661 5.25159 8.49261 5.25 8 5.25H6C5.50739 5.25 5.21339 5.25159 5.00266 5.27992C4.90611 5.29291 4.85774 5.3082 4.83596 5.31716C4.83092 5.31923 4.8276 5.32085 4.82567 5.32186L4.82324 5.32324L4.82186 5.32567C4.82085 5.3276 4.81923 5.33092 4.81716 5.33596C4.8082 5.35774 4.79291 5.40611 4.77992 5.50266C4.75159 5.71339 4.75 6.00739 4.75 6.5V7.32412ZM3.75 21.25H6.25L6.25 15.948C6.24997 15.0495 6.24995 14.3003 6.32991 13.7055C6.41432 13.0777 6.59999 12.5109 7.05546 12.0555C7.51093 11.6 8.07773 11.4143 8.70552 11.3299C9.13855 11.2717 9.65344 11.2559 10.2482 11.2516C10.244 10.6814 10.23 10.2512 10.1835 9.90539C10.1214 9.44393 10.0142 9.24643 9.88388 9.11612C9.75357 8.9858 9.55607 8.87858 9.09461 8.81654C8.61157 8.75159 7.96401 8.75 7 8.75C6.03599 8.75 5.38843 8.75159 4.90539 8.81654C4.44393 8.87858 4.24643 8.9858 4.11612 9.11612C3.9858 9.24643 3.87858 9.44393 3.81654 9.90539C3.75159 10.3884 3.75 11.036 3.75 12V21.25ZM7.75 21.25H16.25V16C16.25 15.036 16.2484 14.3884 16.1835 13.9054C16.1214 13.4439 16.0142 13.2464 15.8839 13.1161C15.7536 12.9858 15.5561 12.8786 15.0946 12.8165C14.6116 12.7516 13.964 12.75 13 12.75H11C10.036 12.75 9.38843 12.7516 8.90539 12.8165C8.44393 12.8786 8.24643 12.9858 8.11612 13.1161C7.9858 13.2464 7.87858 13.4439 7.81654 13.9054C7.75159 14.3884 7.75 15.036 7.75 16V21.25ZM17.75 21.25H20.25V7.772C20.25 7.08479 20.2489 6.63075 20.2101 6.28238C20.1734 5.95272 20.1091 5.79193 20.0274 5.67401C19.9457 5.55609 19.8177 5.43949 19.5219 5.28934C19.2094 5.13066 18.7846 4.97023 18.1412 4.72893C16.8906 4.25997 16.0312 3.93978 15.3766 3.79858C14.7379 3.66082 14.468 3.73388 14.288 3.85859C14.108 3.98331 13.9448 4.21044 13.8496 4.8568C13.752 5.5193 13.75 6.43639 13.75 7.772V11.2516C14.3455 11.2558 14.861 11.2716 15.2945 11.3299C15.9223 11.4143 16.4891 11.6 16.9445 12.0555C17.4 12.5109 17.5857 13.0777 17.6701 13.7055C17.7501 14.3003 17.75 15.0495 17.75 15.948L17.75 21.25ZM4.82324 5.32324C4.82357 5.32297 4.82364 5.32283 4.82324 5.32324C4.82278 5.32369 4.82296 5.32358 4.82324 5.32324ZM9.25 15C9.25 14.5858 9.58579 14.25 10 14.25H14C14.4142 14.25 14.75 14.5858 14.75 15C14.75 15.4142 14.4142 15.75 14 15.75H10C9.58579 15.75 9.25 15.4142 9.25 15ZM9.25 18C9.25 17.5858 9.58579 17.25 10 17.25H14C14.4142 17.25 14.75 17.5858 14.75 18C14.75 18.4142 14.4142 18.75 14 18.75H10C9.58579 18.75 9.25 18.4142 9.25 18Z'></path>
							</g>
						</svg>
						<span className={`${responsiveMenu ? styles.texteSpan : ''}`}>Ecoles Populaires</span>
					</Link>
					{responsiveMenu && (
						<div className={styles.focus2}>
							<span></span>
							<div>Ecoles Populaires</div>
						</div>
					)}
				</li>
				<li className={`${styles.li} ${getActiveClass('/ecoles-populaires')}`}>
					<Link href='/ecoles-populaires'>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
							<path d='M10.119 16.064c2.293-.53 4.427-.994 3.394-2.946-3.147-5.941-.835-9.118 2.488-9.118 3.388 0 5.643 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.393 2.946 1.985.458 2.118 1.428 2.118 3.107l-.003.828h-1.329c0-2.089.083-2.367-1.226-2.669-1.901-.438-3.695-.852-4.351-2.304-.239-.53-.395-1.402.226-2.543 1.372-2.532 1.719-4.726.949-6.017-.902-1.517-3.617-1.509-4.512-.022-.768 1.273-.426 3.479.936 6.05.607 1.146.447 2.016.206 2.543-.66 1.445-2.472 1.863-4.39 2.305-1.252.29-1.172.588-1.172 2.657h-1.331c0-2.196-.176-3.406 2.116-3.936zm-10.117 3.936h1.329c0-1.918-.186-1.385 1.824-1.973 1.014-.295 1.91-.723 2.316-1.612.212-.463.355-1.22-.162-2.197-.952-1.798-1.219-3.374-.712-4.215.547-.909 2.27-.908 2.819.015.935 1.567-.793 3.982-1.02 4.982h1.396c.44-1 1.206-2.208 1.206-3.9 0-2.01-1.312-3.1-2.998-3.1-2.493 0-4.227 2.383-1.866 6.839.774 1.464-.826 1.812-2.545 2.209-1.49.345-1.589 1.072-1.589 2.334l.002.618z' />
						</svg>
						<span className={`${responsiveMenu ? styles.texteSpan : ''}`}>A Propos de nous</span>
					</Link>
					{responsiveMenu && (
						<div className={styles.focus2}>
							<span></span>
							<div>A Propos de nous</div>
						</div>
					)}
				</li>
			</ul>
		</nav>
	);
}