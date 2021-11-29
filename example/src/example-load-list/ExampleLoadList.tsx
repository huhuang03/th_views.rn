import React from 'react';
import {View, Text} from 'react-native';
import {LoadListView} from 'th_views.rn';
import {User} from '../model/User';

export interface ExampleLoadListProps {}

const ExampleLoadList: React.FC<ExampleLoadListProps> = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'gray',
      }}>
      <LoadListView<User>
        style={{
          flex: 1,
        }}
        size={20}
        flatListProps={{
          keyExtractor: (user, index) => `${index}`,
        }}
        dataLoader={page => {
          return fetch(`https://randomuser.me/api/?results=${page.size}`, {})
            .then(res => res.text())
            .then(text => {
              // console.log('text: ', text);
              return JSON.parse(text);
            })
            .then((res: any) => {
              console.log('res: ', res);
              return {
                data: res.results,
                isOk: () => true,
                hasMore: () => false,
              };
            });
        }}
        dividerHeight={10}
        viewBuilder={item => (
          <View
            style={{
              backgroundColor: 'white',
              padding: 30,
            }}>
            <Text>{item.name.first}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ExampleLoadList;
