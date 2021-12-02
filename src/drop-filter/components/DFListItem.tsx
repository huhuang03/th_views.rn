// import React, {useEffect, useMemo, useState} from 'react';
// import {Text, ColorValue, FlatList, ViewStyle, View, Pressable} from 'react-native';
// import {gDp} from 'th_comm.rn';
// import {CODE_ALL, DFDataItem, DFSelectItem, DFDataItemMethod} from '../model';
//
// export interface ListItemProps {
//   title: string;
//   onClick: (item: DFDataItem) => void;
//
//   style?: ViewStyle;
//   backgroundColor?: ColorValue;
//   data?: DFDataItem[];
//
//   select?: DFSelectItem;
//   addAll: boolean;
// }
//
// // what's the right behavior when parent choice has change?
// // should I update?
// const DFListItem: React.FC<ListItemProps> = props => {
//   const {data = [], title, onClick} = props;
//   const [select, setSelect] = useState(props.select);
//   const level = data?.[0].level ?? -1;
//
//   useEffect(() => {
//     setSelect(props.select)
//   }, [props.data, props.select?.code])
//
//   const items: DFDataItem[] = useMemo(() => {
//     const rst: DFDataItem[] = [];
//     if (props.addAll) {
//       rst.push({
//         level: level,
//         name: `全部${title}`,
//         code: CODE_ALL,
//       })
//     }
//     rst.push(...data);
//     return rst;
//   }, [data, select?.code])
//
//   return (
//     <View
//       style={{
//         flex: 1,
//         ...props.style,
//       }}
//       >
//       <FlatList<DFDataItem>
//         data={items}
//         renderItem={item => {
//           return <Pressable
//             onPress={() => {
//               onClick(item.item)
//               // onClick({
//               //   code: item.item.code,
//               //   name: item.item.title
//               // }, item.item.isAll);
//             }}
//             style={{
//               flex: 1,
//               height: gDp(64),
//             }}>
//             <View
//               style={{
//                 height: gDp(64),
//                 backgroundColor: DFDataItemMethod.isSelect(item.item, select)? '#f5f5f5': 'white',
//                 flex: 1,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//               }}>
//               <View
//                 style={{
//                   backgroundColor: DFDataItemMethod.isSelect(item.item, select)? '#fc6600' : 'transparent',
//                   width: gDp(4),
//                   height: gDp(20),
//                 }}>
//               </View>
//               <Text
//                 key={item.index.toString()}
//                 style={{
//                   fontSize: gDp(24),
//                   color: DFDataItemMethod.isSelect(item.item, select)? '#fc6600' : '#3c3c3c',
//                   paddingLeft: gDp(24),
//                 }}>{item.item.name}</Text>
//             </View>
//           </Pressable>
//         }} />
//     </View>
//   );
// };
//
// export default DFListItem;
