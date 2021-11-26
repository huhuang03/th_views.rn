import React, {useMemo} from 'react';
import {Text, ColorValue, FlatList, ViewStyle} from 'react-native';
import {gDp} from 'th_comm.rn';

export const INDEX_ALL = 0;

export interface ListItemProps {
  style?: ViewStyle;
  title: string;
  onClick: (i: number) => void;
  backgroundColor: ColorValue;
  items: string[];
  selectedIndex: number;
}

const ListItem: React.FC<ListItemProps> = props => {
  const items = useMemo(() => [`全部${props.title}`, ...props.items], props.items)

  return (
    <FlatList
      style={props.style}
      data={items} renderItem={item => {
      return <Text
        key={item.index.toString()}
        style={{
          height: gDp(64),
          paddingLeft: gDp(24),
        }}>{item.item}</Text>
    }} />
  );
};

export default ListItem;
