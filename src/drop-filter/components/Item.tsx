import React from 'react';
import {View, Text} from 'react-native';

export interface ItemProps {
  isSelected: boolean;
  color: string;
}

const Item: React.FC<ItemProps> = props => {
  return (
    <View>
      <Text>Item</Text>
    </View>
  );
};

export default Item;
