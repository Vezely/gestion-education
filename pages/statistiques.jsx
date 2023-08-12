import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/statistiques.module.css';
import axios from 'axios';

const Statistiques = () => {
	const { register, handleSubmit, watch } = useForm();

	const handleFileUpload = async (data) => {
		const formData = new FormData();
		formData.append('photo', data.photo[0]);

		try {
			const response = await axios.post('/api/uploadPhoto', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			if (response.status === 200) {
				console.log('Photo téléchargée avec succès');
			}
		} catch (error) {
			console.error('Erreur lors de la requête Axios:', error);

			if (error.response) {
				console.error("Détails de l'erreur:", error.response.data);
			}
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.contenu}>
				<form onSubmit={handleSubmit(handleFileUpload)}>
					<label>
						<span>Photo : </span>
						<input type='file' name='photo' {...register('photo')} />
					</label>
					<button type='submit'>Télécharger la photo</button>
				</form>
			</div>
		</div>
	);
};

export default Statistiques;
