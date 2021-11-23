import React from 'react';
import {View, Text, Pressable} from 'react-native';

export interface _TitleItemProps {
  title: string;
  isOther: boolean;
  isExpand: string;
  onClick: () => void;
}

const _TitleItem: React.FC<_TitleItemProps> = props => {

  return (
    <Pressable
      onPress={props.onClick}>
      <View
        style={{
          flexDirection: 'row'
        }}>
        <Text
          style={{
            color: props.isExpand? '#FC6600' : '#3C3C3C'
          }}>{props.title}</Text>
      </View>
    </Pressable>
  );
};

export default _TitleItem;
