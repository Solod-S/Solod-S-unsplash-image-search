import axios from 'axios';
const options = {
  key: '9tSb3ALXYO6Va-6WbKlq3Ox7oXjwofHL-Q5yPZ9X5uc',
  query: '',
  orientation: 'landscape',
  page: 1,
  per_page: 40,
};

// expected output: 0, 1 or 2
const { key, per_page } = options;
// axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';
axios.defaults.baseURL = 'https://api.unsplash.com/';
export const GetImages = async (searchQuery, page) => {
  const response = await axios.get(
    `search/photos/?client_id=${key}&query=${searchQuery}&page=${page}&per_page=${per_page}`
  );

  return response;
};
export const GetPopularImages = async () => {
  const response = await axios.get(
    `photos/?client_id=${options.key}&per_page=${options.per_page}&order_by=latest`
  );

  return response;
};
