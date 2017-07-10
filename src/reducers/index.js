import { combineReducers } from 'redux';
import navigation from './navigation';
import main from './main';
import reciters from './reciters';
import chapters from './chapters';
import search from './search';
import player from './MusicPlayer';

export default AppNavigator => combineReducers({
  main,
  reciters,
  chapters,
  search,
  songs: player,
  player,
  navigation: navigation(AppNavigator)
});
