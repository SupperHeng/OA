import axios from 'axios';

const request = axios.create({
  baseURL: 'http://www.fmin-courses.com:4106',
  timeout: 3000,
  headers: {'Content-Type': 'application/json'}
})

request.interceptors.request.use( config => {
  const satoken = localStorage.getItem('satoken');
  if(satoken) config.headers['Authorization'] = `satoken ${satoken}`;
  return config;
}, error => {
  return Promise.reject(error);
});

request.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);

})

export default request;