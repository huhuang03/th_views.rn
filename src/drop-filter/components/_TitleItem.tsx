import React, {ReactNode} from 'react';
import {View, Text, Pressable, ImageSourcePropType} from 'react-native';
import {gDp} from 'th_comm.rn';

export interface _TitleItemProps {
  title: string;
  isOther: boolean;
  isExpand: boolean;

  hint: {
    colspan: ReactNode,
    expand: ReactNode,
  }
  onClick: (isExpand: boolean) => void;
}

const _TitleItem: React.FC<_TitleItemProps> = props => {

  return (
    <Pressable
      onPress={() => props.onClick(props.isExpand)}>
      <View
        style={{
          paddingHorizontal: gDp(50),
          alignItems: 'center',
          height: '100%',
          flexDirection: 'row'
        }}>
        <Text
          style={{
            fontSize: gDp(24),
            color: props.isExpand? '#FC6600' : '#3C3C3C'
          }}>{props.title}</Text>
      </View>
    </Pressable>
  );
};

export default _TitleItem;
