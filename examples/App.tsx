import * as React from 'react';
import {View, Pressable, Text} from 'react-native';
// Haha, compiler can recognize this, but not the webstorm
import {LoadView} from 'th_views.rn';

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
      <Item text={'加载成功'} onClick={() => {}} />
      <Item text={'加载失败'} onClick={() => {}} />
    </View>
  );
};

export default App;
