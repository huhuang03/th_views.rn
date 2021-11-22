import React from 'react';
import {View, Text} from 'react-native';
import FakeTab from '../../src/FakeTab';
import {gDp} from 'th_comm.rn';

export interface ExampleFakeTabProps {}

const ExampleFakeTab: React.FC<ExampleFakeTabProps> = props => {
  return (
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
  );
};

export default ExampleFakeTab;
