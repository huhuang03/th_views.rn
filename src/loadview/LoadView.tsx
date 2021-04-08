import React, {useState} from 'react'
import { View } from 'react-native'
import LoadViewConfig from './LoadViewConfig';

const _STATE_LOADING = 1;
const _STATE_DATA = 2;
const _STATE_ERROR = 3;
const _STATE_NO_DATA = 4;


export interface Props {
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
        return props.children
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