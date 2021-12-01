import React, {ReactElement, useMemo, useState} from 'react';
import {View, Text, ViewStyle, StyleSheet, Pressable} from 'react-native';
import {gDp} from 'th_comm.rn';

// too many style, we need struct
export interface FakeTabProps {
  style?: ViewStyle;

  /**
   * style集合。用于设置样式
   */
  styles?: {
    tabBar?: {
      /**
       * tabBarItem最外层的view。默认是加了paddingHorizontal gDp(60)
       */
      container?: ViewStyle;
    };
  };
  tabStyle?: ViewStyle;
  selectedItemStyle?: ViewStyle;
  underLineStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  titles: string[];
}

const FakeTab: React.FC<FakeTabProps> = props => {
  const [index, setIndex] = useState<number>(0);

  const _children = useMemo(() => {
    console.log('useMemo called!!');
    if (!Array.isArray(props.children)) {
      console.error('props.children should be an array');
      return [];
    }
    return props.children;
  }, [props.children]);

  // ts javascript
  const _getTitleText = (index: number): string => {
    if (index < props.titles.length) {
      return props.titles[index];
    }
    return '';
  };

  const _Content = () => {
    return (
      <View>
        {_children.map((item, i) => {
          return (
            <View
              style={{
                height: i === index ? undefined : 0,
                width: i === index ? undefined : 0,
                marginLeft: i === index ? 0 : 10000,
              }}>
              {item}
            </View>
          );
        })}
      </View>
    );
  };

  const _isSelected = (_index: number): boolean => {
    return _index === index;
  };

  const _TabBarItem = ({index}: {index: number}): ReactElement => {
    return (
      <Pressable
        onPress={() => {
          setIndex(index);
        }}>
        <View
          style={{
            paddingHorizontal: gDp(30),
            ...props.styles?.tabBar?.container,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={{...styles.tabBarText}}>{_getTitleText(index)}</Text>
            <View
              style={{
                ...styles.underLine,
                ...props.underLineStyle,
                backgroundColor: _isSelected(index)
                  ? props.underLineStyle?.backgroundColor ||
                  styles.underLine.backgroundColor
                  : 'transfer',
              }}
            />
          </View>
        </View>
      </Pressable>
    );
  };

  // what to do for the i?
  const indexes: number[] = useMemo(() => {
    return Array.from(_children.keys());
  }, [_children]);

  return (
    <View style={props.style}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: gDp(14),
          ...props.tabStyle,
        }}>
        {indexes.map(index => {
          return (
            <_TabBarItem
              key={index.toString() + '_' + _getTitleText(index)}
              index={index}
            />
          );
        })}
      </View>
      <View style={props.contentStyle}>{_Content()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarText: {
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
  },
});

export default FakeTab;
