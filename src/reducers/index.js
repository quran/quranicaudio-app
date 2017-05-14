import { combineReducers } from 'redux';
import navigation from './navigation';
import main from './main';
import reciters from './reciters';
import chapters from './chapters';
import search from './search';
import audio from './audio';

export default AppNavigator =>
  combineReducers({
    main,
    audio,
    reciters,
    chapters,
    search,
    navigation: navigation(AppNavigator)
  });
