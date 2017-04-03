import { FETCH_SURAHS, FETCH_SURAHS_FAIL } from '../actions/constants';

export default function surahs(state = { surahs: [], status: 'none' }, action) {
  const { type, data } = action;

  switch (type) {
    case FETCH_SURAHS:
      return { surahs: data, status: 'success' };
    case FETCH_SURAHS_FAIL:
      return { surahs: [], status: 'fail' };
    default:
      return state;
  }
}