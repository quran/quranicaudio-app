import { AUDIO_LOAD } from '../actions/constants';

export default function audio(
  state = {
    chapters: [],
    selected_chapter: null
  },
  action
) {
  const { type, data } = action;

  switch (type) {
    case AUDIO_LOAD:
      return { ...data };
    default:
      return state;
  }
}
