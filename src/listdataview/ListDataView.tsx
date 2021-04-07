import React, {useState} from 'react'
import { RefreshControlBase, View } from 'react-native'

export interface Props<T> {
    canLoadMore: Boolean;
    canRefresh: Boolean;

    /**
     * 是否在加载(mount)之后，自动进入刷新状态
     */
    autoRefresh: Boolean;

    dataLoader: (page: number) => Promise<T[]>;
    viewBuilder: (data: T) => React.FC;
}

function ListDataView<T>(props: Props<T>): React.ReactElement<Props<T>> {
    var isLoadingData: Boolean = false
    var curPage = 0;
    var data: T[] = [];

    const refresh = () => {
        if (isLoadingData) {
            return;
        }

        isLoadingData = true;
        // do the refresh.
        // and can we do load more when refreshing??
        // if (isRefreshing) {
        //     return;
        // }
        // ok, do the read refreshing
    }

    const loadMore = () => {
        props.dataLoader(curPage + 1).then(rst => {
            data.concat(rst)
            curPage += 1
        })
    }

    return (
        <View></View>
    )
}

export default ListDataView