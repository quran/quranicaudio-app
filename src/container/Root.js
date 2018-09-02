import { createStackNavigator } from 'react-navigation';
import HomeContainer from './Home';
import Chapters from "./Chapters"; //eslint-disable-line
import AudioPlayer from './AudioPlayer';

export const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeContainer },
    Chapters: { screen: Chapters },
    AudioPlayer: { screen: AudioPlayer }
  },
  {
    mode: 'card',
    headerMode: 'screen'
  }
);
