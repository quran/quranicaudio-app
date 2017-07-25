// import { Content, ListItem, Text } from "native-base";
import { Dimensions, FlatList } from "react-native";
import * as Utils from "../utils/audio";
import styled from "styled-components/native";
const { height, width } = Dimensions.get("window");

const WIDTH = width / 5;
const View = styled.View`
  background: #fff;
  flex: 1;
`;
const Item = styled.TouchableOpacity`
  height: 52px;
  align-content: center;
  justify-content: center;
  border: 0.5px solid #bdbdbd;
`;

const Text = styled.Text`
  font-size: 16px;
  letter-spacing: -0.2px;
  color: #777777;
  padding-left: 30px;
`;

const Duration = Text.extend`
  align-self: flex-end;
  text-align: right;
`;

export default props => {
  const ListOfChapters = () =>
    <FlatList
      keyExtractor={item => item.id}
      data={props.chapters}
      renderItem={({ item, index }) => {
        const duration =
          props.files && props.files[item.id]
            ? Utils.secondTime(props.files[item.id].format.duration)
            : "00:00";
        return (
          <Item
            key={item.id}
            onPress={() =>
              props.actions.selectChapter({
                reciter: props.reciter,
                chapter: item.id
              })}>
            <Text>
              {item.name.simple}
              <Duration>
                {duration}
              </Duration>
            </Text>
          </Item>
        );
      }}
    />;

  return (
    <View>
      {ListOfChapters()}
    </View>
  );
};
