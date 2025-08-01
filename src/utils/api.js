import axios from "axios";

const API_KEY=process.env.REACT_APP_API_KEY;
console.log('key값', API_KEY)

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
});
export default api