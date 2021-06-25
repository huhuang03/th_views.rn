import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
const DefaultSplashView = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <ActivityIndicator color="gray"/>
      <Text>正在加载中</Text>
    </View>
  )
}

export default DefaultSplashView
