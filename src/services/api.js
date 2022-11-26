import axios from 'axios';
const options = {
  key: '9tSb3ALXYO6Va-6WbKlq3Ox7oXjwofHL-Q5yPZ9X5uc',
  query: '',
  orientation: 'landscape',
  page: 1,
  per_page: 40,
};

const { key, per_page } = options;
axios.defaults.baseURL = 'https://api.unsplash.com/';

export const GetImages = async (searchQuery, page) => {
  const response = await axios.get(
    `search/photos/?client_id=${key}&query=${searchQuery}&page=${page}&per_page=${per_page}`
  );

  return response;
};
export const getRandomImages = async () => {
  const response = await axios.get(`photos/random/?client_id=${key}&count=30`);

  return response;
};
export const getImageById = async id => {
  const response = await axios.get(`photos/${id}/?client_id=${key}`);

  return response;
};
