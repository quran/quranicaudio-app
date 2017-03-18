import { StackNavigator } from 'react-navigation';
import HomeContainer from './Home';
import Chapters from './Chapters';

export default StackNavigator({
  Home: { screen: HomeContainer },
  Chapters: { screen: Chapters }
});
