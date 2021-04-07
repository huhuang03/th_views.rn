import React, {useState} from 'react'
import { View } from 'react-native'
import LoadErrorView from './LoadErrorView';
import LoadLoadingView from './LoadLoadingView';
import LoadNoDataView from './LoadNoDataView';

// how to control outside??

const _STATE_LOADING = 1;
const _STATE_DATA = 2;
const _STATE_ERROR = 3;
const _STATE_NO_DATA = 4;


class LoadViewConfig {
    static _default: LoadViewConfig = new LoadViewConfig();

    static default() {
        return LoadViewConfig._default;
    }

    static setDefault(config: LoadViewConfig) {
        LoadViewConfig._default = config;
    }

    createNoDataView() {
        return <LoadNoDataView></LoadNoDataView>
    }

    createErrorView() {
        return <LoadErrorView></LoadErrorView>
    }

    createLoadingView() {
        return <LoadLoadingView></LoadLoadingView>
    }
}

export interface Props {
    dataView: React.FC;
    config?: LoadViewConfig;
}


const LoadView: React.FC<Props> = (props) => {
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

    const _getLoadingView = () => {
        return props.config?.createLoadingView()?? LoadViewConfig.default().createLoadingView();
    }

    const _getNoDataView = () => {
        return props.config?.createNoDataView()?? LoadViewConfig.default().createNoDataView();
    }

    const _getErrorView = () => {
        return props.config?.createErrorView()?? LoadViewConfig.default().createErrorView();
    }

    const _getDataView = () => {
        return props.dataView;
    }

    var Content;
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

export default LoadView