import React, {ReactElement, ReactNode, useState} from 'react'
import { View } from 'react-native'
import LoadViewConfig from './LoadViewConfig';

const _STATE_LOADING = 1;
const _STATE_DATA = 2;
const _STATE_ERROR = 3;
const _STATE_NO_DATA = 4;

export enum State {
    SPLASHING = 1,
    LOADING = 2,
    DATA = 3,
    EMPTY = 4,
}

export interface Props {
    state: State;

    /**
     * First time loading view.
     */
    splashView?: ReactElement;

    emptyView?: ReactElement;

    errorView?: ReactElement;
}


/**
 * How do you design a LoadView2??
 */
const LoadView2: React.FC<Props> = (props) => {
    const [state, setState] = useState(_STATE_LOADING)

    const showLoading = () => {
        setState(_STATE_LOADING)
    }

    const showNoData = () => {
        setState(_STATE_NO_DATA)
    }

    const showError = () => {
        setState(_STATE_ERROR)
    }

    const showData = () => {
        setState(_STATE_DATA)
    }

    const _getLoadingView = (): ReactElement => {
        // return props.config?.createLoadingView()?? LoadViewConfig.default().createLoadingView();
        return (<view></view>)
    }

    const _getNoDataView = (): ReactElement => {
        // return props.config?.createNoDataView()?? LoadViewConfig.default().createNoDataView();
        return (<view></view>)
    }

    const _getErrorView = (): ReactElement => {
        // return props.config?.createErrorView()?? LoadViewConfig.default().createErrorView();
        return (<view></view>)
    }

    const _getDataView = (): ReactNode => {
        return props.children?? <View/>;
    }

    let Content: ReactNode;
    if (state == _STATE_LOADING) {
        Content = _getLoadingView();
    } else if (state == _STATE_DATA) {
        Content = _getDataView();
    } else if (state == _STATE_ERROR) {
        Content = _getErrorView();
    } else if (state == _STATE_NO_DATA) {
        Content = _getNoDataView();
    }

    return (
        <View>
            {Content}
        </View>
    )
}

export default LoadView2
