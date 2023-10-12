import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

// const params = new URLSearchParams({
//   //   key: 39106428-5c7ff9c9615a8fde7969ec155,
//   // q: inputValue,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
//   page: 1,
//   per_page: 12,
// });

export const FetchImages = async (q = 'sea', p = 3) => {
  const response = await axios.get(
    `/?q=${q}&page=${p}&key=39106428-5c7ff9c9615a8fde7969ec155&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
