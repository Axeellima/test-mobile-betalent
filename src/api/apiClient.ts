import axios from 'axios';
import {Platform} from 'react-native';
import {IPV4} from '@env';

let IPV4isNecessary = Platform.OS === 'android' ? IPV4 : 'localhost';
console.log(IPV4isNecessary);
const api = axios.create({
  baseURL: `http://${IPV4}:3000/`,
});

export default api;
