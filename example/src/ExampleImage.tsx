import React from 'react';
import {View} from 'react-native';
import {ImageWithLoadingAndCache} from 'th_views.rn';
import {IMG} from './cons/cons';

export interface ExampleImageProps {}

const ExampleImage: React.FC<ExampleImageProps> = props => {
  const img = require('@imgs/loading.png');
  return (
    <View>
      <ImageWithLoadingAndCache
        source={{uri: IMG}}
        style={{
          width: 100,
          height: 100,
        }}
        loadingSrc={img}
      />
    </View>
  );
};

export default ExampleImage;
