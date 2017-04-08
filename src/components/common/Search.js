import Icon from 'react-native-vector-icons/EvilIcons';
import If from './If';
import {
  TextInput,
  StyleSheet,
  View
} from 'react-native';

export default function Search({ actions, value }) {
  return (
    <View style={{ backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#bdbdbd' }}>
      <Icon name="search" size={30} style={style.searchIcon} />
      <TextInput
        style={style.search}
        placeholder="Search…"
        keyboardType="web-search"
        onChangeText={text => actions.search(text)}
        value={value}
      />
      <If test={value.length > 0}>
        <Icon
          name="close"
          onPress={() => actions.clearSearch()}
          size={30} style={style.searchClose}
        />
      </If>
    </View>);
}

const style = StyleSheet.create({
  search: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    height: 45,
    backgroundColor: '#eceff1',
    borderRadius: 20,
    paddingLeft: 50
  },
  searchIcon: {
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 5,
    left: 15,
    top: 20
  },
  searchClose: {
    position: 'absolute',
    right: 15,
    top: 20,
    backgroundColor: 'transparent',
    alignItems: 'flex-end'
  }
});
