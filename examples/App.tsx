import * as React from 'react';
import {View, Pressable, Text} from 'react-native';
import DemoImageWithLoadingAndCache from "./src/demo-image/DemoImageWithLoadingAndCache";
type Props = {};

export const App = () => {
  const Item = ({text, onClick}: {text: string; onClick: () => void}) => {
    return (
      <Pressable onPress={onClick}>
        <Text>{text}</Text>
      </Pressable>
    );
  };

  return (
    <View>
      <DemoImageWithLoadingAndCache />
      <Item text={'加载成功'} onClick={() => {}} />
      <Item text={'加载失败'} onClick={() => {}} />
    </View>
  );
};

export default App;
