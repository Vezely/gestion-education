import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/statistiques.module.css';
import axios from 'axios';

const Statistiques = () => {
	const [file, setFile] = useState(null);
	const [msg, setMsg] = useState(null);
	const [description, setDescription] = useState('');
	const [imageWidth, setImageWidth] = useState(null);
	const [imageHeight, setImageHeight] = useState(null);

	const handleUpload = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		try {
			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData,
			});

			const data = await response.json();
			console.log(file);
			if (data.error) {
				setMsg(data.error);
			} else {
				setFile(data.file);
				setDescription(data.description);
				setImageWidth(data.width); // Nouveau
				setImageHeight(data.height);
				setMsg(data.msg);
			}
			console.log(description);
		} catch (error) {
			setMsg('An error occurred. Please try again.');
		}
	};

	return (
		<div>
			<h1>Upload</h1>
			<form onSubmit={handleUpload} encType='multipart/form-data'>
				<input type='text' name='description' placeholder='Description' />
				<input type='file' name='photo' />
				<button type='submit'>Upload!</button>
			</form>
			{file && <img src={file} alt='Uploaded' />}
			{description && <p>{description}</p>}
			{imageWidth && imageHeight && (
				<p>
					Dimensions: {imageWidth} x {imageHeight}
				</p>
			)}

			{msg && <div>{msg}</div>}
		</div>
	);
};

export default Statistiques;
