import { HOME } from '../actions/constants';

export default function login(state = {}, action) {
  const { type, data } = action;

  switch (type) {
    case HOME:
      return { text: data };
    default:
      return state;
  }
}
