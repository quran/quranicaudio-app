import { PureComponent } from 'react';
import styled from 'styled-components/native';
import color from 'randomcolor';

export default class ProfileHeader extends PureComponent {
  static get getColor() {
    return color({
      luminosity: 'dark',
      format: 'rgba',
      alpha: 0.5 // e.g. 'rgba(9, 1, 107, 0.5)',
    });
  }
  render() {
    const { name } = this.props;


    return (
      <Container>
        <Circle color={ProfileHeader.getColor} />
        <Text>{name}</Text>
      </Container>
    );
  }
}


const Container = styled.View`
      height: 100px;
      border-bottom-width: 1px;
      margin: 0 10px;
      flex-direction: row;
      align-items: center;
    `;

const Circle = styled.View`
      background: ${props => props.color};
      height: 80px;
      width: 80px;
      border-radius: 50px;
    `;

const Text = styled.Text`
      color: black;
      font-size: 20px;
      margin-left: 20px;
      flex-wrap: wrap;
      flex: 1;
    `;
