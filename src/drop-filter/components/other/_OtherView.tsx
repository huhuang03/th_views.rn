// import React, {useState} from 'react';
// import {View, Text, Pressable} from 'react-native';
// import {DropFilterData, DropFilterSelect, DropFilterSelectMethod} from '../../model';
// import {gDp} from 'th_comm.rn';
// import {SizedBox} from '../../../index';
//
// export interface _OtherViewProps {
//   others: DropFilterData['others'],
//   onConfirm: (select: DropFilterSelect['others']) => void;
// }
//
// const _OtherView: React.FC<_OtherViewProps> = props => {
//   // you can don't care the height.
//   const {others, onConfirm} = props;
//   const [select, setSelect] = useState<DropFilterSelect['others']>({});
//
//   const _handleCancel = () => {
//     setSelect({});
//   }
//
//   const _handleConfirm = () => {
//     onConfirm(select);
//   }
//
//   const _Item = ({item}: {item: DropFilterData['others'][0]}) => {
//     const verticalSpacing = gDp(16);
//     const horizontalSpacing = gDp(16);
//
//     const _select = DropFilterSelectMethod.other.getSelected(item.code, select);
//
//     return <View>
//       <Text
//         style={{
//           fontSize: gDp(24),
//           fontWeight: 'bold',
//           color: '#3c3c3c',
//           marginTop: gDp(32),
//           marginBottom: gDp(24) - verticalSpacing,
//           marginLeft: gDp(24),
//         }}>
//         {item.name}
//       </Text>
//
//       <View
//         style={{
//           flexWrap: 'wrap',
//           paddingHorizontal: gDp(24),
//           flexDirection: 'row',
//           paddingLeft: gDp(24) - horizontalSpacing,
//         }}>
//         {item.list.map((item1, index) => {
//           console.log('_select: ', _select, ', code: ', item1.code);
//           const _isSelect = _select.indexOf(item1.code) >= 0;
//
//           return (<Pressable
//             onPress={() => {
//               // console.log('on item clicked, _isSelect: ', _isSelect);
//               if (_isSelect) {
//                 _select.splice(_select.indexOf(item1.code), 1);
//               } else {
//                 _select.push(item1.code);
//                 // console.log('_select: ', _select);
//               }
//               console.log('set select: ', select);
//               setSelect({...select});
//             }}
//             key={index.toString()}
//             style={{
//               borderColor: _isSelect? '#fc6600': 'transparent',
//               borderWidth: gDp(1),
//               // backgroundColor: _isSelect? '#fc6600': 'transfer',
//               backgroundColor: '#efefef',
//               borderRadius: gDp(25),
//               alignItems: 'center',
//               justifyContent: 'center',
//               minWidth: gDp(160),
//               height: gDp(50),
//               marginLeft: horizontalSpacing,
//               marginTop: verticalSpacing,
//             }}>
//             <Text
//               style={{
//                 textAlign: 'center',
//                 textAlignVertical: 'center',
//                 fontSize: gDp(24),
//                 paddingHorizontal: gDp(20),
//               }}>
//               {item1.name}
//             </Text>
//           </Pressable>);
//         })}
//       </View>
//     </View>
//   }
//
//   return (
//     <View
//       style={{
//         paddingBottom: gDp(32),
//         backgroundColor: 'white',
//       }}>
//       {/*{others.map((other, index) => (<_Item key={index.toString()} item={other} />))}*/}
//
//       {/*so it's you height can't be right?*/}
//       <View
//         style={{
//           paddingHorizontal: gDp(24),
//           marginTop: gDp(80),
//           flexDirection: 'row',
//         }}>
//         <Pressable
//           style={{
//             height: gDp(60),
//             flex: 1,
//           }}
//           onPress={_handleCancel}>
//           <Text
//             style={{
//               textAlign: 'center',
//               textAlignVertical: 'center',
//               height: gDp(60),
//               borderRadius: gDp(30),
//               borderColor: '#fc6600',
//               borderWidth: gDp(1),
//               backgroundColor: 'white',
//               color: '#fc6600',
//             }}>
//             重置
//           </Text>
//         </Pressable>
//
//         <SizedBox
//           width={gDp(24)} />
//
//         <Pressable
//           style={{
//             height: gDp(60),
//             flex: 1,
//           }}
//           onPress={_handleConfirm}>
//           <Text
//             style={{
//               flex: 1,
//               textAlign: 'center',
//               textAlignVertical: 'center',
//               height: gDp(60),
//               borderRadius: gDp(30),
//               borderColor: '#fc6600',
//               borderWidth: gDp(1),
//               backgroundColor: '#fc4d00',
//               color: 'white',
//             }}>
//             确定
//           </Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };
//
// export default _OtherView;
