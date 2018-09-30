import React from 'react';
import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { backgroundColor } from '../../styles/variables';

const Container = styled.TouchableOpacity`
  background: ${backgroundColor};
  height: 50px;
  width: 50px;
  z-index: 10;
  justify-content: center;
  align-items: center;
`;


export default ({ onPress }) => (
  <Container onPress={onPress}>
    <FontAwesome name="filter" color="white" size={30} />
  </Container>
);
