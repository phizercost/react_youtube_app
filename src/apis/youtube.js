import axios from 'axios';
const KEY = 'AIzaSyBc97XZR9nUA38XLrNp_9XdHStuFKnqJyM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
