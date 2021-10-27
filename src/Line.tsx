import React from 'react';
import {View, Text, ViewStyle} from 'react-native';

export interface LineProps {
  height: number;
  paddingHorizontal: number;

  style?: ViewStyle;
}

/**
 * A horizontal line
 */
const Line: React.FC<LineProps> = props => {
  return (
    <View
      style={{
        height: props.height,
        paddingHorizontal: props.paddingHorizontal,
        ...props.style,
      }}>
    </View>
  );
};

export default Line;
