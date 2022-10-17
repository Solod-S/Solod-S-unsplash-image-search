import axios from 'axios';
const options = {
  key: '9tSb3ALXYO6Va-6WbKlq3Ox7oXjwofHL-Q5yPZ9X5uc',
  query: '',
  orientation: 'landscape',
  page: 1,
  per_page: 40,
};
const { key, per_page, orientation } = options;
axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';
export const GetImages = async (searchQuery, page) => {
  const response = await axios.get(
    `?client_id=${key}&query=${searchQuery}&orientation=${orientation}&page=${page}&per_page=${per_page}`
  );
  // return response.data.data;
  return response;
};

// const options = {
//   key: '29776170-5db4a15cb76834f05dd09f0ed',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };
// const { key, per_page, image_type, orientation } = options;
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// export const GetImages = async (searchQuery, page) => {
//   const response = await axios.get(
//     `?key=${key}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}&image_type=${image_type}&orientation=${orientation}`
//   );
//   // return response.data.hits;
//   return response;
// };
// export const GetMaterialToServer = async () => {
//   const response = await axios.get('/materials');
//   return response.data;
// };
