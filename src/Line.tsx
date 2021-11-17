import React from 'react';
import {View, ViewStyle} from 'react-native';

export interface LineProps {
  height: number;
  paddingHorizontal?: number;

  style?: ViewStyle;
}

/**
 * A horizontal line
 */
const Line: React.FC<LineProps> = props => {
  const {paddingHorizontal = 0} = props;

  return (
    <View
      style={{
        height: props.height,
        paddingHorizontal: paddingHorizontal,
        ...props.style,
      }}>
    </View>
  );
};

export default Line;
