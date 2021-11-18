import React, {useState} from 'react';
import {Image, ImageProps, ImageURISource} from 'react-native';
import FastImage from '@zfkcyjy/react-native-fast-image';
import {getResizeMode} from './util/_util';

/**
 * Is my ability to scale the image??
 */
export interface ImgWithLoadingAndCacheProps extends ImageProps {
  loadingSrc: ImageURISource;
}

/**
 * This is a Image that you can use like <Image>
 * But this will automatic add the loading and the cache.
 * @param props
 * @constructor
 */
const ImgWithLoadingAndCache: React.FC<ImgWithLoadingAndCacheProps> = props => {
  const [isLoading, setIsLoading] = useState(true);

  let originUri = '';
  if (props.source) {
    originUri = (props.source as {uri: any}).uri;
  }

  const isUri = !!originUri;

  return isUri ? (
    <FastImage
      onLoadEnd={() => {
        setIsLoading(false);
      }}
      style={props.style}
      source={{uri: originUri}}
      resizeMode={getResizeMode(props.resizeMode)}
    />
  ) : (
    <Image
      loadingIndicatorSource={props.loadingSrc}
      onLoadEnd={() => {
        setIsLoading(false);
      }}
      {...props}
    />
  );
};

export default ImgWithLoadingAndCache;
