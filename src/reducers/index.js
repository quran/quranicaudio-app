import { combineReducers } from 'redux';
import navigation from './navigation';
import main from './main';
import reciters from './reciters';
import search from './search';

export default AppNavigator => combineReducers({
  main,
  reciters,
  search,
  navigation: navigation(AppNavigator)
});
