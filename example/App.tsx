import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ExampleDropFilter from './src/ExampleDropFilter';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: 'white',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentContainerStyle={{
          height: '100%',
          flex: 1,
        }}
        style={{
          ...backgroundStyle,
        }}>
        <View
          style={{
            backgroundColor: 'white',
          }}>
          <ExampleDropFilter />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
