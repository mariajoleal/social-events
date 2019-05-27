import axios from 'axios';

export function getEvents() {
  return axios.get('http://localhost:8080/api/events/');
}

export function addEvent(event) {
  console.log(event);
  return axios.post('http://localhost:8080/api/events/', event);
} 

export function login(user) {
  return axios.post('http://localhost:8080/api/users/login', user);
} 