import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {DFDataItem, DFSelectItem} from '../model';
import DFListItem from './DFListItem';

export interface DFStaticContentProps {
  // so what this data present?
  data: DFDataItem;
}

// any better idea to present the select?
const DFStaticContent: React.FC<DFStaticContentProps> = props => {
  const {data} = props;
  // const [select, setSelect] = useState<DFSelectItem | undefined>(undefined);

  // let curSelect: DFSelectItem | undefined = {
  //   level: -1,
  //   child: select,
  // }

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>

      {data.list?.map((item, index) => {
        // curSelect = curSelect?.child;
        // ok, please do some thing.
        const rst = <DFListItem
          key={`${index}`}
          // title need get from parent select.
          title={''} onClick={() => {}} addAll={}/>;
        return rst;
      })}

    </View>
    // <View>
    //   <Text>DFStaticContent</Text>
    // </View>
  );
};

export default DFStaticContent;
