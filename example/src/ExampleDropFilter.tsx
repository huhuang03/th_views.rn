import React, {useEffect, useState} from 'react';
import {DropFilterView, DropFilterData} from 'th_views.rn';
import {View} from 'react-native';
import {getCates} from './model/datasource';

export interface ExampleDropFilterProps {}

const ExampleDropFilter: React.FC<ExampleDropFilterProps> = props => {
  const [data, setData] = useState<DropFilterData>({});

  useEffect(() => {
    getCates()
      .then(cates => {
        console.log('cates: ', cates);
        setData({
          main: [
            {
              level: -1,
              name: '分类',
              code: -1,
              list: cates,
            },
          ],
        });
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <DropFilterView
        data={data}
        onConfirm={select => {
          console.log('select: ', select);
        }}
      />
    </View>
  );
};

export default ExampleDropFilter;
