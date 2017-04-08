import { combineReducers } from 'redux';
import navigation from './navigation';
import main from './main';
import reciters from './reciters';
import chapters from './chapters';
import search from './search';
import files from './files';

export default AppNavigator => combineReducers({
  main,
  reciters,
  chapters,
  files,
  search,
  navigation: navigation(AppNavigator)
});
