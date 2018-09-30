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
  renderHaramainSection = (reciters) => {
    const Madinah = reciters.filter(item => item.name.indexOf('Madinah') > -1);
    const Makkah = reciters.filter(item => item.name.indexOf('Makkah') > -1);

    return (
      <React.Fragment>
        <Text divider>Makkah</Text>
        {this.renderListItems(Makkah)}
        <Text divider>Madinah</Text>
        {this.renderListItems(Madinah)}
      </React.Fragment>
    );
  };

  renderListItems(item) {
    return item.map(reciter => (
      <ListItem
        key={reciter.id}
        style={{
          marginRight: 10
        }}
        onPress={() => this.props.actions.navigate('Chapters', { reciter })}
      >
        <Text>{reciter.name}</Text>
      </ListItem>
    ));
  }

  renderReciters = ({ item }) => {
    const { section } = this.props;
    const isHaramainSection = section === 2;

    if (item.hasReciters && isHaramainSection) {
      return this.renderHaramainSection(item.reciters);
    }

    if (item.hasReciters) {
      return (
        <React.Fragment>
          <Text divider>{item.letter}</Text>
          {this.renderListItems(item.reciters)}
        </React.Fragment>
      );
    }

    return null;
  };

  render() {
    const { reciters, section } = this.props;
    const list = formatRecitersByLetter(reciters, section);

    if (list.length < 1) {
      return (
        <NoneFound>
          <Icon name="exclamation-triangle" size={25} /> No Recitation(s) found.
        </NoneFound>
      );
    }

    return <FlatList data={list} renderItem={this.renderReciters} />;
  }
}

const Icon = styled(FontAwesome)`
  color: #2ca4ab;
`;

const NoneFound = styled.Text`
  flex: 1;
  font-size: 20px;
  justify-content: center;
  align-self: center;
  margin-top: 50%;
`;

export default Reciters;
