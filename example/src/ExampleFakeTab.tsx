import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import FakeTab from '../../src/FakeTab';
import {gDp} from 'th_comm.rn';

export interface ExampleFakeTabProps {}

const ExampleFakeTab: React.FC<ExampleFakeTabProps> = props => {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      <FakeTab
        contentStyle={{
          padding: gDp(20),
        }}
        titles={['基础信息', '生产实力', '资质证书']}>
        <View>
          <Text>基础信息</Text>
        </View>
        <View>
          <Text>生产实力</Text>
          <Text>生产实力</Text>
          <Text>生产实力</Text>
        </View>
        <View>
          <Text>资质证书</Text>
        </View>
      </FakeTab>

      <FakeTab
        styles={{
          tabBar: {
            container: {
              paddingHorizontal: gDp(0),
              paddingRight: gDp(60),
            },
          },
        }}
        contentStyle={{
          padding: gDp(20),
        }}
        titles={['基础信息', '生产实力', '资质证书']}>
        <View>
          <Text>基础信息</Text>
        </View>
        <View>
          <Text>生产实力</Text>
          <Text>生产实力</Text>
          <Text>生产实力</Text>
        </View>
        <View>
          <Text>资质证书</Text>
        </View>
      </FakeTab>
    </ScrollView>
  );
};

export default ExampleFakeTab;
