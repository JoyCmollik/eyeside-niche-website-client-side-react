import axios from 'axios';

const useAxios = () => {
	// https://damp-cove-47447.herokuapp.com/
	// https://eyeside.onrender.com
	const client = axios.create({
		baseURL: 'https://eyeside.onrender.com',
	});
	const admin = axios.create({
		baseURL: 'https://eyeside.onrender.com/admin/',
	});
	return { client, admin };
};

export default useAxios;
