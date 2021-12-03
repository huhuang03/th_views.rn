import React, {useState} from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {
  DropFilterData,
  DFModel,
  DropFilterSelect,
} from './model';
import _TitleItem from './components/_TitleItem';
import {isEmptyArray} from '../module/util/util.js';
import {gDp} from 'th_comm.rn';
import DFListItem from './components/DFListItem';
// import _OtherView from './components/other/_OtherView';
import DFStaticContent from './components/DFStaticContent';

export interface DropFilterViewProps {
  data: DropFilterData;
  // any better idea?
  onConfirm?: (select: DropFilterSelect) => void;
}

const INDEX_COLSPAN = -1;

export const DropFilterView: React.FC<DropFilterViewProps> = props => {
  const {data, onConfirm} = props;
  const [index, setIndex] = useState(INDEX_COLSPAN);
  const height = useWindowDimensions().height;
  const [select, setSelect] = useState<DropFilterSelect>({
    main: {},
    others: {},
  })

  const [mainNames, setMainNames] = useState<string[]>([]);

  /**
   * @param mainIndex 当前index
   * @param model 当前选中
   * @param confirm 是否能确定选中（既需要收起了）
   */
  const _handleMainConfirm = (mainIndex: number, model: DFModel, confirm?: boolean) => {
    setSelect({
      ...select,
    })

    if (confirm) {
      console.log('mainIndex: ', mainIndex, 'model: ', model);
      mainNames[mainIndex] = model.name;
      setMainNames([...mainNames]);
      setIndex(INDEX_COLSPAN);
      onConfirm?.(select)
    }
  }

  const isExpand = () => {
    return index >= 0;
  }

  const isSelectOther = () => {
    return index == data.main?.length;
  }

  // ok, let's do somethings
  const _TabTitle = () => {
    // ok, fix the title.

    console.log(`data.main?: `, data.main);
    return (<View
      style={{
        flexDirection: 'row',
        height: gDp(88),
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      {data.main?.map((item, i) => {
        // fuck, how to fix the title?
        let _title =  mainNames[i] || item.name;
        return (
          <_TitleItem key={i.toString()} title={_title} isOther={false} isExpand={i === index} onClick={isExpand => {
            setIndex(isExpand ? INDEX_COLSPAN : i);
          }}/>);
      })}
      {!isEmptyArray(data.others) && <_TitleItem
          key={data.others?.length.toString()}
          title={'筛选'} isOther={true} isExpand={isSelectOther()} onClick={(isExpand) => {
        setIndex(isExpand? INDEX_COLSPAN : data.main?.length || INDEX_COLSPAN);
      }} />}
    </View>)
  }

  // how to all the expand?
  // for now we ignore?
  const _ContentItem = () => {
    // how can you update the data?
    const _data = data.main![index];
    return <DFStaticContent data={_data} />
  }

  const _ContentOther = () => {
    // why you height can't be right?
    return <Text>Impl me</Text>
    // return <_OtherView others={data.others} onConfirm={() => {}} />
  }

  const contentHeight = height * 0.5;

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
              height: height * 0.9,
            }}>
            {isSelectOther()? <_ContentOther/> : <View
              style={{
                backgroundColor: 'white',
                height: contentHeight,
              }}
            ><_ContentItem/></View>}
          </View>
        </View>)}
    </View>
  );
};
