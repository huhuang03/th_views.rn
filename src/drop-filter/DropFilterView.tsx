import React, {useState} from 'react';
import {useWindowDimensions, View} from 'react-native';
import {
  CODE_ALL,
  DropFilterData,
  DropFilterDataMethod,
  DropFilterModel,
  DropFilterSelect,
  DropFilterSelectMethod
} from './model';
import _TitleItem from './components/_TitleItem';
import {isEmptyArray} from '../module/util/util.js';
import {gDp} from 'th_comm.rn';
import ListItem from './components/ListItem';
import _OtherView from './components/other/_OtherView';

export interface DropFilterViewProps {
  data: DropFilterData;
  onConfirm: (select: DropFilterSelect) => void;
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
  const _handleMainConfirm = (mainIndex: number, model: DropFilterModel, confirm?: boolean) => {
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
    return index == data.main.list!.length;
  }

  // ok, let's do somethings
  const _TabTitle = () => {
    // ok, fix the title.

    return (<View
      style={{
        flexDirection: 'row',
        height: gDp(88),
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      {data.main.list!.map((item, i) => {
        // fuck, how to fix the title?
        let _title =  mainNames[i] || item.name;
        return (
          <_TitleItem key={i.toString()} title={_title} isOther={false} isExpand={i === index} onClick={isExpand => {
            setIndex(isExpand ? INDEX_COLSPAN : i);
          }}/>);
      })}
      {!isEmptyArray(data.others) && <_TitleItem
          key={data.others.length.toString()}
          title={'筛选'} isOther={true} isExpand={isSelectOther()} onClick={(isExpand) => {
        setIndex(isExpand? INDEX_COLSPAN : data.main.list!.length);
      }} />}
    </View>)
  }

  // how to all the expand?
  // for now we ignore?
  const _ContentItem = () => {
    // how can you update the data?

    const itemDataL0 = data.main.list![index];
    let _selectL0 = DropFilterSelectMethod.main.getL0Select(index, select.main);
    console.log('_select 0: ', _selectL0);

    const itemDataL1 = DropFilterDataMethod.getItemByCode(_selectL0.code, itemDataL0);
    let _selectL1 = _selectL0 && _selectL0.child;
    console.log('itemDataL1: ', itemDataL1);

    const itemDataL2 = DropFilterDataMethod.getItemByCode(_selectL1?.code, itemDataL1);
    let _selectL2 = _selectL1 && _selectL1.child;

    return <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>

      <ListItem
        key={"0"}
        style={{
          flex: 1,
          height: '100%',
        }}
        title={itemDataL0.name}
        onClick={(code, isAll) => {
          _selectL0.code = code.code;
          _selectL0.isAll = code.code === CODE_ALL;
          _handleMainConfirm(index, code, code.code === CODE_ALL);
        }}
        backgroundColor={'white'}
        data={{...itemDataL0}}
        select={_selectL0} />

      {itemDataL1 && <ListItem
        key={"1"}
        style={{
          flex: 1,
          height: '100%',
        }}
        title={itemDataL1.name}
        onClick={(code, isAll) => {
          if (_selectL0.child?.code != code.code) {
            _selectL0.child = {
              level: _selectL0.level + 1,
              code: code.code,
              isAll: code.code === CODE_ALL,
            }
            _handleMainConfirm(index, code, code.code === CODE_ALL);
          }
        }}
        backgroundColor={'white'}
        data={{
          ...itemDataL1
        }}
        select={_selectL1} /> || <View key={'empty_1'} style={{flex: 1}} />}

      {itemDataL2 && <ListItem
          key={"2"}
          style={{
            flex: 1,
            height: '100%',
          }}
          title={itemDataL2.name}
          onClick={(model, isAll) => {
            if (_selectL1?.child?.code != model.code) {
              _selectL1!.child = {
                level: _selectL1!.level + 1,
                code: model.code,
                isAll: model.code === CODE_ALL,
              }
              _handleMainConfirm(index, model, true);
            }
          }}
          backgroundColor={'white'}
          data={{
            ...itemDataL2
          }}
          select={_selectL2} /> || <View key={'empty_2'} style={{flex: 1}} />}
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
              maxHeight: height * 0.7,
            }}>
            {isSelectOther()? <_ContentOther/> : <View
              style={{
                backgroundColor: 'white',
                minHeight: gDp(600),
              }}
            ><_ContentItem/></View>}
          </View>
        </View>)}
    </View>
  );
};
