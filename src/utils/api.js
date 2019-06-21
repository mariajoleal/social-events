import axios from 'axios';

export function getEvents() {
  return axios.get('http://localhost:8080/api/events/');
}

export function addEvent(event) {
  return axios.post('http://localhost:8080/api/events/', event);
} 

export function login(user) {
  return axios.post('http://localhost:8080/api/users/login', user);
}

export function register(newUser) {
  return axios.post('http://localhost:8080/api/users/register', newUser);
} 

export function uploadImage(file) {
  return axios.post(' https://api.cloudinary.com/v1_1/socializeit/image/upload', file, {
    headers: { "X-Requested-With": "XMLHttpRequest" },
  });
}