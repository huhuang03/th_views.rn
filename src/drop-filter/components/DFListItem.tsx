import React, {useMemo} from 'react';
import {Text, ColorValue, FlatList, ViewStyle, View, Pressable} from 'react-native';
import {gDp} from 'th_comm.rn';
import {CODE_ALL, DFDataItem, DFDataItemMethod, DFSelectItem} from '../model';

export interface ListItemProps {
  title: string;
  onClick: (item: DFDataItem) => void;

  style?: ViewStyle;
  backgroundColor?: ColorValue;
  data?: DFDataItem;

  addAll?: boolean;
}

// what's the right behavior when parent choice has change?
// should I update?
const DFListItem: React.FC<ListItemProps> = props => {
  const {data, onClick, addAll = true} = props;
  console.log('DfListItem rerender by ', data);
  // const [select, setSelect] = useState(props.select);
  const list = data?.list?? []
  const level = (data?.level?? 0) + 1
  const title = data?.name;


  const items: DFDataItem[] = useMemo(() => {
    const rst: DFDataItem[] = [];
    if (addAll) {
      rst.push({
        level: level,
        name: `全部${title}`,
        code: CODE_ALL,
      })
    }
    rst.push(...list);
    return rst;
  }, [data])

  const handleClick = (item: DFDataItem) => {
    onClick(item);
  }

  return (
    <View
      style={{
        flex: 1,
        ...props.style,
      }}
      >
      {/*key didn't change so the value is not change?*/}
      <FlatList<DFDataItem>
        keyExtractor={((item, index) => `${DFDataItemMethod.key(item)}_${item.code === data?.code}`)}
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={item => {
          console.log('item rerender: ', item.item);
          const isSelect = item.item.code === data?.select?.code;
          return <Pressable
            onPress={() => {
              handleClick(item.item)
            }}
            style={{
              flex: 1,
              height: gDp(64),
            }}>
            <View
              style={{
                height: gDp(64),
                backgroundColor: isSelect? '#f5f5f5': 'white',
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: isSelect? '#fc6600' : 'transparent',
                  width: gDp(4),
                  height: gDp(20),
                }}>
              </View>
              <Text
                key={item.index.toString()}
                style={{
                  fontSize: gDp(24),
                  color: isSelect? '#fc6600' : '#3c3c3c',
                  paddingLeft: gDp(24),
                }}>{item.item.name}</Text>
            </View>
          </Pressable>
        }} />
    </View>
  );
};

export default DFListItem;
