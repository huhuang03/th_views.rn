import React, {ReactElement, ReactNode, useState} from 'react'
import DefaultSplashView from "./defaults/DefaultSplashView";
import DefaultErrorView from "./defaults/DefaultErrorView";

export enum State {
    SPLASHING = 1,
    DATA = 2,
    ERROR = 3,
}


export interface Props {
    /**
     * First time loading view.
     */
    splashView?: ReactElement;

    dataView: ReactElement;

    errorView?: ReactElement;
}

/**
 * If you don't have an loading? how can you have a splash.
 */
const LoadView: React.FC<Props> = (props) => {
    const [state, setState] = useState(State.SPLASHING)

    const getViewByState = () => {
        if (state == State.SPLASHING) {
            return props.splashView && <DefaultSplashView/>
        } else if (state == State.DATA) {
            return props.dataView
        } else {
            return props.errorView && <DefaultErrorView/>
        }
    }

    return (
        <view>
            {getViewByState()}
        </view>
    )
}


export default LoadView
