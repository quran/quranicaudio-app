import {
  View
} from 'react-native';
import {
  Spinner
} from 'native-base';

export default ({ color = '#13a5ae' }) => <View style={{ flex: 1, justifyContent: 'center' }}><Spinner color={color} /></View>;
