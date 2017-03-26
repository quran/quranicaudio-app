import { SEARCH, SEARCH_CLEAR } from '../actions/constants';

export default function reciters(state = { value: '' }, action) {
  const { type, input } = action;
  switch (type) {
    case SEARCH:
      return { value: input };
    case SEARCH_CLEAR:
      console.warn(action.type);
      return { value: '' };
    default:
      return state;
  }
}
