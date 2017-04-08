import { FETCH_FILES, FETCH_FILES_FAIL } from '../actions/constants';

export default function files(state = { data: [], status: 'none' }, action) {
  const { type, data } = action;
  switch (type) {
    case FETCH_FILES:
      return { data, status: 'success' };
    case FETCH_FILES_FAIL:
      return { data: [], status: 'fail' };
    default:
      return state;
  }
}
