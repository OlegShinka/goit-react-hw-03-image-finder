import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '39106428-5c7ff9c9615a8fde7969ec155';

export const FetchImages = async (q, p) => {
  const response = await axios.get(
    `/?q=${q}&page=${p}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
