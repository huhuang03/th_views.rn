import React from 'react';
import {DropFilterView} from 'th_views.rn';
import {mockDropFilterData} from './module/mock/mock_drop_filter';
import {View} from 'react-native';

export interface ExampleDropFilterProps {}

const ExampleDropFilter: React.FC<ExampleDropFilterProps> = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
      }}>
      <DropFilterView data={mockDropFilterData} onChanged={() => {}} />
    </View>
  );
};

export default ExampleDropFilter;
