// @snippet
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { reducerSET } from "../../actions/default"


const useInterval = (callback, delay) => {
    const savedCallback = React.useRef();

    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    React.useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};


const Error = () => {

    // redux ->
    const dispatch = useDispatch();
    const _error = useSelector(state => state.error)
    // <- redux



    const timeInterval = 5 // w sekundach;
    let [count, setCount] = useState(timeInterval);

    useInterval(() => {
        setCount(count - 1);
        if (count === 1) {
            dispatch(reducerSET(false, 'ERROR_SET_MESSAGE'))
        }
    }, 1000);


    return (
        <>
            {_error.message ? <div id="error" className="error">
                <div className="error__message">{_error.message}</div>
                <div className="error__counter">Komunikat wyłączy się za: <strong>{count}</strong> sek.</div>
            </div> : null}
        </>
    )

}
export default Error