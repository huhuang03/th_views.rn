import React from 'react'
import { View, Text } from 'react-native'

const LoadNoDataView = () => {
    return (
        <View
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text>无数据</Text>
        </View>
    )
}


export default LoadNoDataView