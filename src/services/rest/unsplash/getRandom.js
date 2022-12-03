import axios from 'axios';
import options from './options';

const getRandom = async () => {
  axios.defaults.baseURL = 'https://api.unsplash.com/';
  const { key } = options;
  const response = await axios.get(`photos/random/?client_id=${key}&count=30`);

  return response;
};

export default getRandom;
