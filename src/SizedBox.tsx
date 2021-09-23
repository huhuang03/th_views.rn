import React from 'react';
import {View} from 'react-native';

export interface SizedBoxProps {
  width?: number;
  height?: number;
}

const SizedBox: React.FC<SizedBoxProps> = props => {
  return (
    <View
      style={{
        width: props.width,
        height: props.height
      }}>
    </View>
  );
};

export default SizedBox;
