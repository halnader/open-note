import {FETCH_USER} from '../actions';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_USER:
      if(!action.payload.data) {
        return state;
      } else {
        return action.payload.data;
      }
    default:
      return state;
  }
}
