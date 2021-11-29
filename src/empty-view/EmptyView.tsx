import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {gDp} from 'th_comm.rn';

export interface EmptyViewProps {
  desc?: string;
}

/**
 * 空页面
 */
const EmptyView: React.FC<EmptyViewProps> = props => {
  const {desc = '数据为空'} = props;
  // noinspection JSSuspiciousNameCombination
  const height = Dimensions.get('window').width;

  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height,
      }}>
      <Image
        style={{
          width: gDp(724),
          height: gDp(410),
        }}
        source={require('../imgs/ic_bg_empty_search.png')}
      />

      <Text
        style={{
          marginTop: gDp(34),
          fontSize: gDp(32),
          fontWeight: 'bold',
          color: '#333643',
        }}>
        {desc}
      </Text>
    </View>
  );
};

export default EmptyView;
