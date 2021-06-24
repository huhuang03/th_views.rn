import React, {ReactElement, ReactNode, useState} from 'react'

export enum State {
    SPLASHING = 1,
    DATA = 2,
    ERROR = 3,
}


export interface Props {
    state: State;
    /**
     * First time loading view.
     */
    splashView?: ReactElement;

    dataView?: ReactElement;

    errorView?: ReactElement;
}

/**
 * If you don't have an loading? how can you have a splash.
 */
const LoadView: React.FC<Props> = (props) => {
    const [state, setState] = useState(props.state)

    const getViewByState = () => {
        if (state == State.SPLASHING) {
            return props.splashView
        } else if (state == State.DATA) {
            return props.dataView
        } else {
            return props.errorView
        }
    }

    return (
        <view>
            getViewByState()
        </view>
    )
}


export default LoadView
