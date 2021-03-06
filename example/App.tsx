import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme, View} from 'react-native';
import ExampleDropFilter from './src/ExampleDropFilter';
import ExamplePromptModal from './src/ExamplePromptModal';

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
        {/*<ExampleDropFilter />*/}
        {/*<ExampleImage />*/}
        {/*<ExamplePromptModal />*/}
      </View>
    </SafeAreaView>
  );
};
export default App;
