import axios from 'axios';
import options from './options';

const getAll = async (searchQuery, page) => {
  axios.defaults.baseURL = 'https://api.unsplash.com/';
  const { key, per_page } = options;
  const response = await axios.get(
    `search/photos/?client_id=${key}&query=${searchQuery}&page=${page}&per_page=${per_page}`
  );

  return response;
};

export default getAll;
