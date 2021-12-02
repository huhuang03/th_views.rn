import React, {ReactNode, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {DFDataItem, DFSelectItem} from '../model';
import DFListItem from './DFListItem';

export interface DFStaticContentProps {
  // so what this data present?
  data: DFDataItem;
}

// any better idea to present the select?
const DFStaticContent: React.FC<DFStaticContentProps> = props => {
  // you need change the data when select?
  // So I have the data?
  const [data, setData] = useState(props.data);
  // const [select, setSelect] = useState<DFSelectItem | undefined>(undefined);

  // let curSelect: DFSelectItem | undefined = {
  //   level: -1,
  //   child: select,
  // }

  // how can we present the reset.
  const _Content = () => {
    // how to do this?
    const rst: ReactNode[] = [];
    // If I don't choice, will you give the next view?
    let _data: DFDataItem | undefined = data;

    while (_data && _data.list && _data.list.length > 0) {
      // key time, let's first choice set select in item directly
      const curData = _data;
      rst.push(<DFListItem
        data={_data.list}
        title={data.name}
        onClick={(item) => {
          console.log('onClick called');
          // why _data is null?
          curData!.select = item;
          console.log('data: ', data);
          setData({...data})
        }} />)
      _data = _data.select;
    }
    return rst;
  }


  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      {_Content()}
    </View>
  );
};

export default DFStaticContent;
