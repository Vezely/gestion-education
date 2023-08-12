import styles from '../styles/Main.module.css';
import Fond from './Fond';
import Menu from './Menu';

export default function Accueil() {
	return (
		<main>
			<div className={styles.container}>
				{/* <Menu /> */}
				<Fond />
			</div>
		</main>
	);
}
