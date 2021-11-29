import React from 'react';
import {Button, Dimensions, Image, Text, View} from 'react-native';
import {gDp} from 'th_comm.rn';

/**
 * 加载错误时候的错误类型
 */
export enum ErrorType {
  SERVER,
  NET,
}

export interface AppErrorViewProps {
  onRefresh?: () => void;
  errorType?: ErrorType;
}

/**
 * 错误View
 */
const ErrorView: React.FC<AppErrorViewProps> = props => {
  const height = Dimensions.get('window').width;

  const {errorType = ErrorType.SERVER} = props;
  const msg =
    errorType === ErrorType.SERVER
      ? '服务器开小差了。请稍后重试'
      : '请检查您的网络';

  // noinspection JSSuspiciousNameCombination
  return (
    <View
      style={{
        width: '100%',
        height,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{
          width: gDp(724),
          height: gDp(410),
        }}
        source={require('../imgs/ic_error.png')}
      />

      <Text
        style={{
          fontSize: gDp(28),
          color: '#999',
        }}>
        {msg}
      </Text>

      <View
        style={{
          marginTop: gDp(20),
          width: '50%',
        }}>
        <Button title={'刷新'} onPress={() => props.onRefresh?.()} />
      </View>
    </View>
  );
};

export default ErrorView;
