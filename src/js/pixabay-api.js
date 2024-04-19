import axios from 'axios';

export async function apiPixabay(searchWord, page) {
  const API_KEY = '43264950-7d4cd6be2017577f15438949e';
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: searchWord,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });
  return response.data;
}
