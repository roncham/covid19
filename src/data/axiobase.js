import axios from 'axios';

export default axios.create({
  baseURL: 'https://corona.lmao.ninja',
  responseType: 'json'
});
