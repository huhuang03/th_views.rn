import React, {
    ForwardedRef,
    forwardRef, ReactElement,
    useEffect,
    useImperativeHandle,
    useState,
} from 'react';

import {
    ActivityIndicator, Dimensions,
    FlatList,
    FlatListProps,
    RefreshControl, Text,
    View,
} from 'react-native';
import PageVo from './model/PageVo';
import {gDp} from 'th_comm.rn';

export interface ListDataHandler<L, D> {
    hasMore: (l: L) => boolean;
    getData: (l: L) => D[];
    isOk: (l: L) => boolean;
}

/**
 * 怎么处理分页参数？？
 */
export interface LoadListProps<L, D> {
    listDataHandler: ListDataHandler<L, D>;
    dataLoader: (page: PageVo) => Promise<L>;
    renderItem: ({item, index}: {item: D, index: number}) => ReactElement;

    // ItemView间隔大小
    dividerHeight?: number;

    // 每页数据大小
    size?: number;

    emptyConfig?: {
        hint?: string;
        builder?: React.FC;
    };

    /**
     * 是否在首次加载的时候显示loading
     * 一般情况下，加载第一页需要显示Loading。
     * 但是有些特殊情况，可能不想要这个loading（比如其它地方已经显示loading了）
     */
    showInitLoading?: boolean;

    flatListProps?: Partial<FlatListProps<D>>;

    canRefresh?: boolean;
}

export interface GJListViewRef<D> {
    refresh: (shoLoading: boolean) => void;
    changeData: (changer: (data: D[]) => D[]) => void;
}

/**
 *
 * L: is the list type.
 *
 * D: is the data type.
 */
function LoadList<L, D>(
  props: LoadListProps<L, D>,
  ref: ForwardedRef<GJListViewRef<D>>,
): React.ReactElement<D> {
    const {width: windowWidth} = Dimensions.get('window'); // 屏幕宽高

    const {showInitLoading = true, canRefresh = false} = props;
    const {
        listDataHandler,
        size = 10,
        emptyConfig = {hint: '数据为空'},
        dividerHeight = 0,
    } = props;

    const [data, setData] = useState<D[] | undefined>(undefined);
    // how many page that got.
    const [page, setPage] = useState(0);

    // 是否正在数据，防重复加载
    const [isLoadingData, setIsLoadingData] = useState(false);

    const [showError, setShowError] = useState(false);

    const [showLoading, setShowLoading] = useState(false);
    const [isFirstTimeLoadData, setIsFirstTimeLoadData] = useState(true);
    const [noMoreData, setNoMoreData] = useState(false);
    const dataIsEmpty = data && data.length === 0;

    const buildEmpty = () => {
        if (emptyConfig.builder) {
            return <emptyConfig.builder />;
        } else {
            return <Text>数据为空</Text>
        }
    };

    const loadData = (index: number = 1, pShowLoading = showInitLoading) => {
        console.log('refresh called, isLoading: ', isLoadingData);
        if (isLoadingData) {
            return;
        }
        setIsLoadingData(true);

        if (index === 1 && pShowLoading) {
            console.log('setShowLoading(true) called');
            setShowLoading(true);
        }

        props
          .dataLoader({index, size})
          .then(listData => {
              if (!listDataHandler.isOk(listData)) {
                  setShowError(true);
              } else {
                  setShowError(false);
                  setIsFirstTimeLoadData(false);

                  setNoMoreData(!listDataHandler.hasMore(listData));
                  let newList: D[] = [];
                  if (index !== 1) {
                      newList.push(...(data ?? []));
                  }
                  newList.push(...(listDataHandler.getData(listData) ?? []));
                  setData(newList);
                  setPage(index);
              }

              setIsLoadingData(false);
              setShowLoading(false);
          })
          .catch(err => {
              console.error(err);
              setShowLoading(false);
              setShowError(true);
              setIsLoadingData(false);
          });
    };

    useImperativeHandle(ref, () => ({
        refresh: (pShowLoading: boolean) => {
            loadData(1, pShowLoading);
        },
        changeData: changer => {
            setData(changer(data || []));
        },
    }));

    const refresh = () => loadData(1);

    // 这里在首页的时候为什么会调用两次？
    // 调用两次，说明控件被回收，又被创建了。
    useEffect(() => {
        refresh();
    }, []);

    if (showError) {
        return <Text>出错了。请稍后刷新重试</Text>
    }

    if (dataIsEmpty) {
        return buildEmpty();
    }

    if (showLoading && isFirstTimeLoadData) {
        // noinspection JSSuspiciousNameCombination
        return (
          <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: windowWidth,
            }}>
              <ActivityIndicator size={'large'} color={'green'} />
          </View>
        );
    }

    const handleLoadMore = () => {
        if (noMoreData) {
            return;
        }
        loadData(page + 1);
    };

    const _LoadMoreIndicatorView = () => {
        if (noMoreData) {
            return null;
        }
        return (
          <View
            style={{
                height: gDp(100),
                alignItems: 'center',
                justifyContent: 'center',
            }}>
              <ActivityIndicator size={'small'} />
          </View>
        );
    };

    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        {...props.flatListProps}
        data={data ?? []}
        renderItem={props.renderItem}
        refreshControl={
            (canRefresh && (
              <RefreshControl onRefresh={refresh} refreshing={false} />
            )) ||
            undefined
        }
        ListFooterComponent={_LoadMoreIndicatorView}
        ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                    height: dividerHeight,
                }}
              />
            );
        }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.4}
      />
    );
}

// Redecalare forwardRef
declare module 'react' {
    function forwardRef<T, P = {}>(
      render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
    ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

export default forwardRef(LoadList);
