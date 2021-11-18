import React from 'react';
import {View} from 'react-native';

export interface ExpanderProps {
  flex?: number;
}

const Expander: React.FC<ExpanderProps> = props => {
  const {flex = 1} = props;
  return <View style={{flex}} />;
};

export default Expander;
