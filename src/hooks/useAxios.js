import axios from 'axios';

const useAxios = () => {
	// https://damp-cove-47447.herokuapp.com/
	const client = axios.create({
		baseURL: 'https://damp-cove-47447.herokuapp.com/',
	});
	const admin = axios.create({
		baseURL: 'https://damp-cove-47447.herokuapp.com/admin/',
	});
	return { client, admin };
};

export default useAxios;
