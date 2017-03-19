import { FETCH_RECITERS, FETCH_RECITERS_FAIL } from '../actions/constants';

export default function reciters(state = { reciters: [], status: 'none' }, action) {
  const { type, data } = action;
  switch (type) {
    case FETCH_RECITERS:
      return { reciters: data, status: 'success' };
    case FETCH_RECITERS_FAIL:
      return { reciters: [], status: 'fail' };
    default:
      return state;
  }
}
