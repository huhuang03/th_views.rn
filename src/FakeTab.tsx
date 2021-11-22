import React, {ReactElement, ReactNodeArray, useMemo, useState} from 'react';
import {View, Text, ViewStyle, StyleSheet, Pressable} from 'react-native';
import {gDp} from 'th_comm.rn';

export interface FakeTabProps {
  style?: ViewStyle;
  tabStyle?: ViewStyle;
  itemStyle?: ViewStyle;
  selectedItemStyle?: ViewStyle;
  underlineStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  titles: string[];
}

const FakeTab: React.FC<FakeTabProps> = props => {
  const [index, setIndex] = useState<number>(0)

  const _getChildren = (): ReactNodeArray => {
    if (!Array.isArray(props.children)) {
      console.error('props.children should be an array');
      return [];
    }
    return props.children;
  }

  const _getTitleText = (index: number): string => {
    if (index < props.titles.length) {
      return props.titles[index];
    }
    return '';
  }

  const _Content = () => {
    if (_getChildren().length > index) {
      return _getChildren()[index];
    }
    return <View />
  }

  const _isSelected = (_index: number): boolean => {
    return _index === index;
  }

  const _TabBarItem = ({index}: {index: number}): ReactElement => {
    return <Pressable
      onPress={() => {
        setIndex(index);
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={styles.tabBarText}>
          {_getTitleText(index)}
        </Text>
        <View
          style={{
            ...styles.underLine,
            backgroundColor: _isSelected(index)? styles.underLine.backgroundColor: 'transfer',
          }}>
        </View>
      </View>
    </Pressable>
  }

  // what to do for the i?
  const indexes: number[] = useMemo(() => {
    return Array.from(_getChildren().keys());
  }, [_getChildren()])

  return (
    <View
      style={props.style}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: gDp(14),
          ...props.tabStyle,
        }}>
        {indexes.map(index => {
          return <_TabBarItem
            key={index.toString() + '_' + _getTitleText(index)}
            index={index}/>
        })}
      </View>
      <View
        style={props.contentStyle}>
        {_Content()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarText: {
    paddingHorizontal: gDp(30),
    fontWeight: 'bold',
    fontSize: gDp(28),
    color: '#333',
  },

  underLine: {
    marginTop: gDp(14),
    height: gDp(4),
    width: gDp(56),
    backgroundColor: '#fc6600',
    borderRadius: gDp(4),
  }
})

export default FakeTab;
