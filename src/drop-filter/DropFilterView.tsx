import React from 'react';
import {View, Text} from 'react-native';
import {DropFilterData} from './model';

export interface DropFilterViewProps {
  data: DropFilterData;
  // how can we provide the current choice state?
  onChanged: () => void;
}

export const DropFilterView: React.FC<DropFilterViewProps> = props => {
  return (
    <View>
      <Text>DropFilterView</Text>
    </View>
  );
};
