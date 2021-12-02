import React from 'react';
import {Text, View} from 'react-native';
import {ImgWithLoadingAndCache} from 'th_views.rn';
import {url} from './module/url';
import {gDp} from 'th_comm.rn';

export interface ExampleImageProps {}

const ExampleImage: React.FC<ExampleImageProps> = props => {
  const img = require('@imgs/loading.png');
  console.log('url: ', url.imgDelay(10000));

  return (
    <View>
      <Text>Image use pure background as loading</Text>
      <ImgWithLoadingAndCache
        key={'img0'}
        source={{uri: url.imgDelay(10000)}}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'gray',
        }}
        loading={{src: img}}
      />

      <Text
        style={{
          marginTop: gDp(10),
        }}>
        Image with and loading image
      </Text>

      <ImgWithLoadingAndCache
        key={'img2'}
        source={{uri: url.imgDelay(10000)}}
        style={{
          width: 100,
          height: 100,
        }}
        loading={{src: img}}
      />
    </View>
  );
};

export default ExampleImage;
