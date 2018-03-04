import axios from 'axios';

export const CREATE_POST = 'create_post';

export function createPost(values, callback) {
  const request = axios.post('/api/lessonrequests', values)
  .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  }
}
