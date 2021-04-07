import React from 'react'
import { View, Text } from 'react-native'
import * as Progress from 'react-native-progress';

const LoadLoadingView = () => {
    return (
        <View
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Progress.Circle size={15} indeterminate={true} />
            <Text>正在加载中</Text>
        </View>
    )
}

export default LoadLoadingView