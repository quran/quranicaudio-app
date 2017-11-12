import styled from 'styled-components/native';

import {
  Spinner
} from 'native-base';

const View = styled.View`
  flex: 1;
  justifyContent: center;
`;

export default ({ color = '#13a5ae' }) => <View><Spinner color={color} /></View>;
