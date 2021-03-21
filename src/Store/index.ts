import { combineReducers, Reducer } from 'redux';

// Import all redux Sub States here
import { NumberState } from './Reducers/Number'

// Import reducers of Sub States here
import numberReducer from './Reducers/Number';

// Top Level State Object
// Insert all sub states and their interface.
export interface ApplicationState {
    number: NumberState,
}

export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    number: numberReducer,
})