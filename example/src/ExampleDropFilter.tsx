import React from 'react';
import {View, Text} from 'react-native';
import {DropFilterView} from 'th_views.rn';
import {mockDropFilterData} from './module/mock/mock_drop_filter';

export interface ExampleDropFilterProps {}

const ExampleDropFilter: React.FC<ExampleDropFilterProps> = props => {
  return (
    <DropFilterView data={mockDropFilterData} onChanged={() => {}} />
  );
};

export default ExampleDropFilter;
