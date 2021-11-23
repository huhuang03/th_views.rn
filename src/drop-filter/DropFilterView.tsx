import React from 'react';
import {View} from 'react-native';
import {DropFilterData} from './model';
import _TitleItem from './components/_TitleItem';

export interface DropFilterViewProps {
  data: DropFilterData;
  // how can we provide the current choice state?
  onChanged: () => void;
}

export const DropFilterView: React.FC<DropFilterViewProps> = props => {
  const {data} = props;

  // ok, let's do somethings
  const _TabTitle = () => {
    return (<View>
      {data.items.map(item => (<_TitleItem title={item.name} isOther={false} isExpand={false} onClick={() => {}} />))}
      {data.others.map(other => (<_TitleItem title={other.name} isOther={true} isExpand={false} onClick={() => {}} />))}
    </View>)
  }

  return (
    <View>
      <_TabTitle />
    </View>
  );
};
