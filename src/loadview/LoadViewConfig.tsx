import DefaultErrorView from './defaults/DefaultErrorView';
import LoadLoadingView from './LoadLoadingView';
import LoadNoDataView from './LoadNoDataView';

export default class LoadViewConfig {
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
        return <DefaultErrorView></DefaultErrorView>
    }

    createLoadingView() {
        return <LoadLoadingView></LoadLoadingView>
    }
}
