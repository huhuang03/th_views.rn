import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {DFDataItem, DFSelectItem} from '../model';
import DFListItem from './DFListItem';

export interface TreeContentWithLoaderProps {
  level0: DFDataItem;

  l0Loader: () => Promise<DFDataItem>;
  level1Loader: (select0?: DFSelectItem) => Promise<DFDataItem>;
  level2Loader: (select0?: DFSelectItem) => Promise<DFDataItem>;

  // please
  select: DFSelectItem;

  // how to notify?
  onConfirm: (select: DFSelectItem) => void;
}

const TreeContentWithLoader: React.FC<TreeContentWithLoaderProps> = props => {
  const [l0Data, setL0Data] = useState<DFDataItem | undefined>(undefined);
  const [l1Data, setL1Data] = useState<DFDataItem | undefined>(undefined);
  const [l2Data, setL2Data] = useState<DFDataItem | undefined>(undefined);
  const [select, setSelect] = useState<DFSelectItem | undefined>(props.select);

  useEffect(() => {
    props.l0Loader().then(res => {
      setL0Data(res);
    })
  }, [])

  return (<View
    style={{
      flex: 1,
      flexDirection: 'row',
    }}>

    <DFListItem
      key={"0"}
      style={{
        flex: 1,
        height: '100%',
      }}
      title={l0Data?.name?? ''}
      onClick={(_s, isAll) => {
        if (_s.code === select?.code) {
          return;
        }

        const _select: DFSelectItem = {
          level: 0,
          code: _s.code,
          isAll: isAll,
        }

        setSelect(_select);

        // what to do?
        if (isAll) {
          props.onConfirm(_select);
        } else {
          setSelect(_select);
          props.level1Loader(_select).then(res => {
            setL1Data(res);
          })
        }
      }}
      backgroundColor={'white'}
      data={l0Data}
      select={select} />

    <DFListItem
        key={"1"}
        style={{
          flex: 1,
          height: '100%',
        }}
        title={l1Data?.name?? ''}
        onClick={(code, isAll) => {
          // if (_selectL0.child?.code != code.code) {
          //   _selectL0.child = {
          //     level: _selectL0.level + 1,
          //     code: code.code,
          //     isAll: code.code === CODE_ALL,
          //   }
          //   _handleMainConfirm(index, code, code.code === CODE_ALL);
          // }
        }}
        backgroundColor={'white'}
        data={l1Data}
        select={select?.child} /> || <View key={'empty_1'} style={{flex: 1}} />

    <DFListItem
        key={"2"}
        style={{
          flex: 1,
          height: '100%',
        }}
        title={l2Data?.name?? ''}
        onClick={(model, isAll) => {
          // if (_selectL1?.child?.code != model.code) {
          //   _selectL1!.child = {
          //     level: _selectL1!.level + 1,
          //     code: model.code,
          //     isAll: model.code === CODE_ALL,
          //   }
          //   _handleMainConfirm(index, model, true);
          // }
        }}
        backgroundColor={'white'}
        data={l2Data}
        select={select?.child?.child} /> || <View key={'empty_2'} style={{flex: 1}} />
  </View>);
};

export default TreeContentWithLoader;
