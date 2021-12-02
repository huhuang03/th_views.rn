import React, {useState} from 'react';
import {Image, ImageProps, ImageURISource, View} from 'react-native';
import FastImage from '@zfkcyjy/react-native-fast-image';
import {getResizeMode} from './util/_util';

/**
 * Is my ability to scale the image??
 */
export interface ImgWithLoadingAndCacheProps extends ImageProps {
  /**
   * loading config
   * How to handle someone want use http or someone others want use local img?
   */
  loading?: {
    // use ImageURLSource as loading src.
    src?: ImageURISource;
  }
}

/**
 * This is a Image that you can use like <Image>
 * But this will automatic add the loading and the cache.
 *
 * @param props
 * @constructor
 */
const ImgWithLoadingAndCache: React.FC<ImgWithLoadingAndCacheProps> = props => {
  let originUri = '';

  if (props.source) {
    originUri = (props.source as {uri: any}).uri;
  }

  const isUri = !!originUri;
  const [isLoading, setIsLoading] = useState(isUri);
  const showLoading = isLoading && props.loading?.src

  return isUri ? (
    <View>
      <FastImage
        onLoadEnd={() => {
          setIsLoading(false);
        }}
        style={props.style}
        source={{uri: originUri}}
        resizeMode={getResizeMode(props.resizeMode)}
      />
      {showLoading && <Image {...props}
                             source={props.loading!.src!}
        style={[props.style, {
          position: 'absolute',
          left: 0,
        }]}/>}
    </View>
  ) : (
    <Image
      loadingIndicatorSource={props.loading?.src}
      onLoadEnd={() => {
        console.log('onload end');
        setIsLoading(false);
      }}
      {...props}
    />
  );
};

export default ImgWithLoadingAndCache;
