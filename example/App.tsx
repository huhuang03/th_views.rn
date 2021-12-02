import React from 'react';
import {
  SafeAreaView,
  StatusBar, Text,
  useColorScheme,
  View,
} from 'react-native';
import ExampleImage from './src/ExampleImage';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: 'white',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}>
        {/*<ExampleDropFilter />*/}
        <ExampleImage />
      </View>
    </SafeAreaView>
  );
};
export default App;
