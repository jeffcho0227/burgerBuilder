import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burgerbuilder-app-7d0f6.firebaseio.com/'
});

export default instance;