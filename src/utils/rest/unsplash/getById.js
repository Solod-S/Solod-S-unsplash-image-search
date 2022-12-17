import axios from 'axios';
import options from './options';

const getById = async id => {
  axios.defaults.baseURL = 'https://api.unsplash.com/';
  const { key } = options;
  const response = await axios.get(`photos/${id}/?client_id=${key}`);

  return response;
};
export default getById;
