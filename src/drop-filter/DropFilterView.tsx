import React, {useState} from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {DropFilterData} from './model';
import _TitleItem from './components/_TitleItem';
import {isEmptyArray} from '../module/util/util.js';
import {gDp} from 'th_comm.rn';
import ListItem from './components/ListItem';
import _OtherView from './components/other/_OtherView';

export interface DropFilterViewProps {
  data: DropFilterData;
  onChanged: () => void;
}

const INDEX_COLSPAN = -1;

export const DropFilterView: React.FC<DropFilterViewProps> = props => {
  const {data} = props;
  const [index, setIndex] = useState(INDEX_COLSPAN);
  const height = useWindowDimensions().height;

  const isExpand = () => {
    return index >= 0;
  }

  const isSelectOther = () => {
    return index == data.items.length;
  }

  // ok, we now need create the select state.

  // ok, let's do somethings
  const _TabTitle = () => {
    return (<View
      style={{
        flexDirection: 'row',
        height: gDp(88),
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      {data.items.map((item, i) =>
        (<_TitleItem key={i.toString()} title={item.name} isOther={false} isExpand={i === index} onClick={isExpand => {
          setIndex(isExpand? INDEX_COLSPAN: i);
        }} />))}
      {!isEmptyArray(data.others) && <_TitleItem
          key={data.others.length.toString()}
          title={'筛选'} isOther={true} isExpand={isSelectOther()} onClick={(isExpand) => {
        setIndex(isExpand? INDEX_COLSPAN : data.items.length);
      }} />}
    </View>)
  }

  // how to all the expand?
  // for now we ignore?
  const _ContentItem = () => {
    const itemData = data.items[index];

    return <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <ListItem
        style={{
          flex: 1,
        }}
        title={'分类'}
        onClick={() => {}}
        backgroundColor={'white'}
        items={itemData.next.map(item => item.name)}
        selectedIndex={0} />
      <View>

      </View>
      <View>

      </View>
    </View>
  }

  const _ContentOther = () => {
    // why you height can't be right?
    return <_OtherView others={data.others} onConfirm={() => {}} />
  }

  return (
    <View>
      <_TabTitle />
      {/*backgroundColor: 'rgba(255, 255, 255, 0.5)',*/}
      {/*安利来说。看你的高度应该不会算在我里面啊*/}
      {isExpand() && (
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            top: gDp(88),
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            height: height,
          }}>
          <View
            style={{
              width: '100%',
              maxHeight: height * 0.8,
            }}>
            {isSelectOther()? <_ContentOther/> : <_ContentItem/>}
          </View>
        </View>)}
    </View>
  );
};
