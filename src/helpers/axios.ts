import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.interceptors.response.use(function (response) {
	// response.headers['Access-Control-Allow-Origin'] = '*';
	// response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
	// response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
	return response.data;
});

export default instance;
