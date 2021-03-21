import * as actionTypes from '../Actions/ActionTypes';
import {
    NumberActionTypes,
    SetNumber,
    IncrementNumber
} from '../Actions/ActionTypes'

export interface NumberState {
    number: number
}

const initialState: NumberState = {
    number: 0
}

const reducer = (state: NumberState = initialState, action: NumberActionTypes) => {
    switch (action.type) {
        case actionTypes.SET_NUMBER:
            return setNumber(state, action);
        case actionTypes.INCREMENT_NUMBER:
            return incrementNumber(state, action)
        default:
            return state
    }
}

const setNumber = (state: NumberState = initialState, action: SetNumber): NumberState => {
    return {
        ...state,
        number: action.number
    }
}

const incrementNumber = (state: NumberState = initialState, action: IncrementNumber): NumberState => {
    return {
        ...state,
        number: state.number + 1
    }
}

export default reducer;