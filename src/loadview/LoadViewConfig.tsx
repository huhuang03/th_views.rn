import LoadErrorView from './LoadErrorView';
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
        return <LoadErrorView></LoadErrorView>
    }

    createLoadingView() {
        return <LoadLoadingView></LoadLoadingView>
    }
}