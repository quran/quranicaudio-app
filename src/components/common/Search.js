import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import If from './If';

const View = styled.View`
  backgroundColor: white;
  minHeight: 60px;
`;

const Border = styled.View`
  border: 0.5px solid #bdbdbd;
  border-right-width: 0;
`;

const SearchIcon = styled(Icon)`
  backgroundColor: transparent;
  position: absolute;
  zIndex: 5;
  left: 15px;
  top: 19px;
`;

const CloseIcon = SearchIcon.extend`
  left: 90%;
  top: 22px;
  flex: 1;
  alignItems: flex-end;
`;

const TextInput = styled.TextInput`
  backgroundColor: #eceff1;
  margin: 10px 5px;
  paddingLeft: 50px;
  flex: 1;
  borderRadius: 20px;
  height: 45px;
`;

function Search({ actions, data }) {
  return (
    <View>
      <SearchIcon name="search" size={30} />
      <TextInput
        placeholder="Search…"
        keyboardType="web-search"
        onChangeText={text => actions.search(text)}
        value={data.value}
      />
      <If test={data.value}>
        <CloseIcon
          name="close"
          onPress={() => actions.clearSearch()}
          size={20}
        />
      </If>
      <Border />
    </View>
  );
}

export default Search;
