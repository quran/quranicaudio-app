

import React from 'react';
import formatRecitersByLetter from '../utils/sortNames';
import { FlatList } from 'react-native';
import { ListItem } from 'native-base';
import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Text = styled.Text`
  color: ${props => (props.divider ? 'white' : 'black')};
  font-size: 16px;
  background: ${props => (props.divider ? '#258489' : 'white')};
  padding: ${props => (props.divider ? '10px' : '0')};
`;


class Reciters extends React.PureComponent {
  renderListItems(item) {
    return item.map(reciter => (
      <ListItem
        key={reciter.id}
        style={{
          marginRight: 10
        }}
        onPress={() => this.props.actions.navigate('Chapters', { reciter })}

      >
        <Text>
          {reciter.name}
        </Text>
      </ListItem>
    ));
  }

  render() {
    const { reciters, section } = this.props;
    const list = formatRecitersByLetter(reciters, section);

    const renderReciters = ({ item }) => item.hasReciters && (
      <React.Fragment>
        <Text divider>
          {item.letter}
        </Text>
        {this.renderListItems(item.reciters)}
      </React.Fragment>
    );


    if (list.length < 1) {
      return (
        <NoneFound>
          <Icon name="exclamation-triangle" size={25} /> No Recitation(s) found.
        </NoneFound>
      );
    }

    return (
      <FlatList
        data={list}
        renderItem={renderReciters}
      />
    );
  }
}

const Icon = styled(FontAwesome)`
  color: #2CA4AB;
`;

const NoneFound = styled.Text`
  flex: 1;
  font-size: 20px;
  justify-content: center;
  align-self: center;
  margin-top: 50%;
`;


export default Reciters;
