import { AUDIO_LOAD } from './constants';

export const loadAudio = data => ({
  type: AUDIO_LOAD,
  data
});
