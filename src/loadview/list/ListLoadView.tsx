import React from 'react'
import { FlatList, View } from 'react-native'
import LoadView2 from '../LoadView2';

/**
 * How to set the default value?
 */
export interface Props<T> {
    canLoadMore?: Boolean;
    canRefresh?: Boolean;

    /**
     * 是否在加载(mount)之后，自动进入刷新状态
     */
    autoRefresh?: Boolean;

    dataLoader: (page: number) => Promise<T[]>;
    viewBuilder: (data: T) => React.ReactElement;
}

const defaultProps: Props<any> = {
    canLoadMore: true,
    canRefresh: true,
    autoRefresh: true,
    dataLoader: () => Promise.resolve([]),
    viewBuilder: () => (<View>Please use the viewBuilder</View>)
}

// let think that how the load flow?
// A common flow is:
// First go in to a page. show the loading indicator.
// Then show the data.
// Then do the refresh and load more
function ListLoadView<T>(props: Props<T>): React.ReactElement<Props<T>> {
    var isLoadingData: Boolean = false
    var curPage = 0;
    var data: T[] = [];

    const _fecthData = (page: number) => {
        // ok, let do at here.
    }

    const refresh = () => {
        if (isLoadingData) {
            return;
        }
        isLoadingData = true;
    }

    const loadMore = () => {
        props.dataLoader(curPage + 1).then(rst => {
            data.concat(rst)
            curPage += 1
        })
    }
    const Rst = (<LoadView2>
        <FlatList
        renderItem={({item}) => props.viewBuilder(item)}
        data={data}
        ></FlatList>
    </LoadView2>)

    return (
        Rst
    )
}

ListLoadView.defaultProps = defaultProps

export default ListLoadView
