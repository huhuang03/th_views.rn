import React from 'react';
// 为什么找不到，是webpack的原因吗？
import {ImageWithLoadingAndCache} from 'th_views.rn';
import {IMG} from '../cons';

export interface DemoImageWithLoadingAndCacheProps {}

// ok, please do something.
const DemoImageWithLoadingAndCache: React.FC<DemoImageWithLoadingAndCacheProps> = props => {
  return (
    <ImageWithLoadingAndCache
      style={{
        width: 100,
        height: 100,
      }}
      src={{uri: IMG}}
    />
  );
};

export default DemoImageWithLoadingAndCache;
