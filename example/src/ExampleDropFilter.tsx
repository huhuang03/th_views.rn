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
      }}>
      <DropFilterView
        data={mockDropFilterData}
        onConfirm={select => {
          console.log('select: ', select);
        }}
      />
    </View>
  );
};

export default ExampleDropFilter;
