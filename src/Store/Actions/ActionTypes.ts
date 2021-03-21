
// Number State

export const INCREMENT_NUMBER = "INCREMENT_NUMBER"
export const SET_NUMBER = "SET_NUMBER"

export interface IncrementNumber {
    type: typeof INCREMENT_NUMBER,
}

export interface SetNumber {
    type: typeof SET_NUMBER,
    number: number
}

export type NumberActionTypes = IncrementNumber | SetNumber