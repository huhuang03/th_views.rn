import React, {useMemo} from 'react';
import {Text, ColorValue, FlatList, ViewStyle, View, Pressable} from 'react-native';
import {gDp} from 'th_comm.rn';
import {Code, CODE_ALL, DropFilterDataItem, DropFilterModel, DropFilterSelectItem} from '../model';

export interface ListItemProps {
  style?: ViewStyle;
  title: string;
  onClick: (model: DropFilterModel, isAll: boolean) => void;
  backgroundColor: ColorValue;
  data: DropFilterDataItem;
  select?: DropFilterSelectItem;
}

interface Item {
  title: string;
  isAll: boolean;
  code: Code;
  isSelected: boolean;
}

const ListItem: React.FC<ListItemProps> = props => {
  const {data, select, title, onClick} = props;
  // console.log('data: ', data);
  const hasNext = data.list && data.list.length > 0;

  const items = useMemo(() => {
    const rst: Item[] = [];
    if (hasNext) {
      rst.push({
        title: `全部${title}`,
        isAll: true,
        code: CODE_ALL,
        isSelected: select?.isAll?? false,
      })
    }

    for (const item of data.list?? []) {
      // console.log('item.code: ', item.code, ', select.code: ', select?.code, ', select: ', select);
      rst.push({
        title: item.name,
        isAll: false,
        code: item.code,
        isSelected: select?.code === item.code,
      })
    }

    return rst;
  }, [data, select])

  // console.log('items: ', items);

  return (
    <View
      style={{
        flex: 1,
        ...props.style,
      }}
      >
      <FlatList
        data={items}
        renderItem={item => {
          return <Pressable
            onPress={() => {
              onClick({
                code: item.item.code,
                name: item.item.title
              }, item.item.isAll);
            }}
            style={{
              flex: 1,
              height: gDp(64),
            }}>
            <View
              style={{
                height: gDp(64),
                backgroundColor: item.item.isSelected? '#f5f5f5': 'white',
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: item.item.isSelected? '#fc6600' : 'transparent',
                  width: gDp(4),
                  height: gDp(20),
                }}>
              </View>
              <Text
                key={item.index.toString()}
                style={{
                  fontSize: gDp(24),
                  color: item.item.isSelected? '#fc6600' : '#3c3c3c',
                  paddingLeft: gDp(24),
                }}>{item.item.title}</Text>
            </View>
          </Pressable>
        }} />
    </View>
  );
};

export default ListItem;
