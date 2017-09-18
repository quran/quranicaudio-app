import styled from "styled-components/native";

import Icon from "react-native-vector-icons/EvilIcons";

import If from "./If";
import { TouchableOpacity, Keyboard } from "react-native";

const View = styled.View`
  backgroundColor: white;
  minHeight: 60px;
`;

const SearchIcon = styled(Icon)`
  backgroundColor: transparent;
  position: absolute;
  zIndex: 5;
  left: 5px;
  top: 18px;
  color: #2CA4AB;
`;

const CloseIcon = SearchIcon.extend`
  left: 88%;
  top: 18px;
  flex: 1;
  alignItems: flex-end;
  color: #258489;
`;

const TextInput = styled.TextInput`
  margin: 5px 5px 5px 35px;
  flex: 1;
  height: 45px;
  color: #161616;
  font-size: 20px;
`;

const Border = styled.View`
  border: 0.5px solid #258489;
  position: relative;
  bottom: 10px;
  width: 95%;
  margin-left: 10px;
`;

function Search({ actions, data }) {
  return (
    <TouchableOpacity onPress={() => Keyboard.dismiss()}>
      <View>
        <SearchIcon name="search" size={30} />
        <TextInput
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Search…"
          keyboardType="web-search"
          onChangeText={text => actions.search(text)}
          value={data.value}
        />
        <If test={data.value}>
          <CloseIcon
            name="close"
            onPress={() => {
              actions.clearSearch(); Keyboard.dismiss()
            }}
            size={30}
          />
        </If>
        <Border />
      </View>
    </TouchableOpacity>
  );
}

export default Search;
