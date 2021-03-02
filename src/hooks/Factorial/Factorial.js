// @snippet
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from "react-redux";


import { reducerSET } from "../../actions/default"

const errors = {
    "RangeError: Maximum call stack size exceeded": "Przekroczono maksymalny rozmiar stosu wywołań"
}

const Factorial = () => {

    // redux ->
    const dispatch = useDispatch();
    // <- redux


    const [number, setNumber] = useState(false);
    const [result, setResult] = useState(false);
    const [history, setHistory] = useState(false);
    const inputRef = useRef(null);


    useEffect(() => {
        getHistory()
        inputRef.current.focus();
    }, []);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const values = Object.values(evt.target).reduce((obj, field) => {
            if (field.name) {
                obj[field.name] = field.value;
            }
            return obj
        }, {})
        count(values['number']);
    }

    const count = (value) => {
        if (value > 0) {
            try {
                let score = factorial(value)
                if (score === Infinity) {
                    score = "nieskonczoność"
                }
                setNumber(value);
                setResult(score);
                addToHistory(value, score)
            } catch (e) {
                setResult(false);
                dispatch(reducerSET(errors[e.message] || e.message, 'ERROR_SET_MESSAGE'))
            }
        } else {
            setResult(false);
            dispatch(reducerSET('brak wartości', 'ERROR_SET_MESSAGE'))
        }
    }

    const factorial = (n) => {
        if ((n === 0) || (n === 1)) return 1;
        else {
            return n * factorial(n - 1)
        }
    }

    const addToHistory = (number, result) => {
        const data = {
            number,
            result,
            time: Date.now()
        }
        const history_data = JSON.parse(localStorage.getItem('factorial_history')) || [];
        history_data.push(data);
        localStorage.setItem('factorial_history', JSON.stringify(history_data));
        setHistory(history_data.reverse());
    }

    const getHistory = () => {
        const history_data = JSON.parse(localStorage.getItem('factorial_history')) || [];
        setHistory(history_data.reverse());
    }

    return (
        <div className="factorial">
            <h1>Wyliczanie slini</h1>
            <form onSubmit={handleSubmit} className="factorial__form form">
                <p className="form__label">Podaj liczbę:</p>
                <input
                    type="number"
                    name="number"
                    min="1"
                    className="form__input"
                    ref={inputRef}
                />
                <button type="submit" className="form__button">Oblicz</button>
            </form>
            {result ?
                <div className="factorial__result">
                    <p>Silnia z liczby <strong>{number}</strong> to: <strong>{result}</strong></p>
                </div> : null}
            {history && history.length ?
                <div className="factorial__history">
                    <h2 className="factorial__history__label">Historia poprzednich wyliczeń:</h2>
                    <ul className="factorial__history__list history list">
                        {history.map(item => {
                            return <li className="factorial__history__list__item list__item" key={`item_${item.time}`}>
                                <div className="factorial__history__list__item__math-data">
                                    <div className="factorial__history__list__item__number">Podana liczba: <strong>{item.number}</strong></div>
                                    <div className="factorial__history__list__item__result">Wynik: <strong>{item.result}</strong></div>
                                </div>
                                <div className="factorial__history__list__item__date">Data wyliczenia: {new Date(item.time).toLocaleString()}</div>
                            </li>
                        })}
                    </ul></div> : null}
        </div >
    )

}
export default Factorial