import React, {
    ForwardedRef,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
} from 'react';

import {
    ActivityIndicator,
    FlatList,
    FlatListProps,
    RefreshControl,
    View,
    ViewStyle,
} from 'react-native';
import PageVo from './model/PageVo';
import {gDp} from 'th_comm.rn';

export enum ErrorType {
    SERVER,
    NET,
}

export interface ListDataHandler<L, D> {
    hasMore: (l: L) => boolean;
    getData: (l: L) => D[];
}

/**
 * 怎么处理分页参数？？
 *
 * 参数可能会很多。不要惊讶
 */
export interface AppLoadListProps<L, D> {
    listDataHandler: ListDataHandler<L, D>;

    style?: ViewStyle;
    dataLoader: (page: PageVo) => Promise<L>;
    viewBuilder: (item: D, index: number) => React.ReactElement;
    outStyle?: ViewStyle;

    // ItemView间隔大小
    dividerHeight?: number;
    // 每页数据大小
    size?: number;

    emptyConfig?: {
        hint?: string;
        builder?: React.FC;
    };

    /**
     * 一般情况下，加载第一页需要显示Loading。
     * 但是有些特殊情况，可能不想要这个loading（其它地方已经显示loading了）
     */
    showInitLoading?: boolean;

    flatListProps?: Partial<FlatListProps<T>>;

    // versionNum暂时用来控制刷新。
    versionNum?: number;

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
  props: AppLoadListProps<L, D>,
  ref: ForwardedRef<GJListViewRef<D>>,
): React.ReactElement<D> {
    const {showInitLoading = true, canRefresh = false} = props;
    const {
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
    const [errorType, setErrorType] = useState(ErrorType.SERVER);

    const [showLoading, setShowLoading] = useState(false);
    const [isFirstTimeLoadData, setIsFirstTimeLoadData] = useState(true);
    const [noMoreData, setNoMoreData] = useState(false);
    const dataIsEmpty = data && data.length === 0;

    const buildEmpty = () => {
        if (emptyConfig.builder) {
            return <emptyConfig.builder />;
        } else {
            return <AppEmptyView desc={emptyConfig?.hint ?? ''} />;
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
          .then(gjList => {
              if (!GJBaseMethod.isOk(gjList)) {
                  setShowError(true);
                  setErrorType(ErrorType.SERVER);
              } else {
                  setShowError(false);
                  setIsFirstTimeLoadData(false);

                  setNoMoreData(!GJListMethod.hasMore(gjList));
                  let newList: T[] = [];
                  if (index !== 1) {
                      newList.push(...(data ?? []));
                  }
                  newList.push(...(gjList.data ?? []));
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
              setErrorType(ErrorType.NET);
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
    }, [props.versionNum]);

    if (showError) {
        return <AppErrorView errorType={errorType} onRefresh={refresh} />;
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
        style={props.outStyle}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        {...props.flatListProps}
        contentContainerStyle={props.style}
        data={data ?? []}
        renderItem={item => props.viewBuilder(item.item, item.index)}
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
