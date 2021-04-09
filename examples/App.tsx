/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

 // why you can't find.
 import { ListDataView } from 'th_views.rn'

 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 const dataFetch = (curPage: number) => {
  const url = `https://api.stackexchange.com/2.2/users?page=${curPage}&order=desc&sort=reputation&site=stackoverflow`;
  fetch(url).then(res => res.json())
  .then(data => data.items)
 }

 const App = () => {
  return(
    <View>
      <ListDataView>

      </ListDataView>
      {/* <Text>This is an example</Text> */}
    </View>
  )
 }
 export default App;
