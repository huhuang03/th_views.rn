import React from 'react'
import { View, Text } from 'react-native'

const DefaultErrorView = () => {
    return (
        <View
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text>发生错误了。请稍后刷新重试</Text>
        </View>
    )
}


export default DefaultErrorView
