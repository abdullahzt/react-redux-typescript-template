import React, { useState } from 'react';

import { connect } from 'react-redux';
import { ApplicationState } from './Store/'
import { Dispatch } from 'redux'
import * as actions from './Store/Actions/'
import { NumberActionTypes } from './Store/Actions/ActionTypes';

interface NumberProps {
    number: number,
    setNumber: (number: number) => void
    incrementNumber: () => void
}

const Number: React.FC<NumberProps> = ({ number, setNumber, incrementNumber }) => {

    const [inputValue, setInputValue] = useState("");

    const setNumberHandler = () => {
        let number = parseInt(inputValue) 

        isNaN(number) && (number = 0)

        setNumber(number)
        setInputValue("")
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>

            <h2>{number}</h2>
            <button onClick={incrementNumber} >Increment</button>
            <input
                value={inputValue}
                style={{ margin: 10 }}
                type="text"
                onChange={(event) => setInputValue(event.currentTarget.value)}
            />
            <button onClick={setNumberHandler} >Set Number</button>

        </div>
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        number: state.number.number,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<NumberActionTypes>) => {
    return {
        setNumber: (number: number) => dispatch(
            actions.setNumber(number)
        ),
        incrementNumber: () => dispatch(
            actions.incrementNumber()
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Number);