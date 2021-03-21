import {
    SetNumber,
    IncrementNumber
} from './ActionTypes'

import * as actionTypes from './ActionTypes';

export const setNumber = (number: number): SetNumber => {
    return {
        type: actionTypes.SET_NUMBER,
        number
    }
}

export const incrementNumber = (): IncrementNumber => {
    return {
        type: actionTypes.INCREMENT_NUMBER
    }
}