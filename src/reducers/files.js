import { GET_FILES } from '../actions/constants';

export default function files(state = { files: [] }, action) {
  const { type, data } = action;

  switch (type) {
    case GET_FILES:
      return { ...state, files: data };
    default:
      return state;
  }
}
