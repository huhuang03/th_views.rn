import FastImage, {ResizeMode} from '@zfkcyjy/react-native-fast-image';
import {ImageResizeMode} from 'react-native';

export const getResizeMode = (mode?: ImageResizeMode): ResizeMode => {
  if (mode === 'center') {
    return FastImage.resizeMode.center;
  } else if (mode === 'contain') {
    return FastImage.resizeMode.contain;
  } else if (mode === 'stretch') {
    return FastImage.resizeMode.stretch;
  }
  return FastImage.resizeMode.cover;
};
