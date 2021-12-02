import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

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
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}>
        <ExampleDropFilter />
        {/*<ExampleLoadList />*/}
      </View>
    </SafeAreaView>
  );
};
export default App;
