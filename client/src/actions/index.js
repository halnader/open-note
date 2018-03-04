import axios from 'axios';

export const CREATE_POST = 'create_post';
export const FETCH_USER = 'fetch_user';

export function createPost(values, callback) {
  const request = axios.post('/api/lessonrequests', values)
  .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchUser() {
  const request = axios.get('/api/user');

  return {
    type: FETCH_USER,
    payload: request
  }
}
