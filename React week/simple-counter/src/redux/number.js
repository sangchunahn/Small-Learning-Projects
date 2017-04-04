// this is a reducer to store the state of name
const initialState = {
    number: 0
}

let action = {
    type: 'INCREMENT_NUMBER'
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case 'INCREMENT_NUMBER':
        return {
            number: state.number + 1
        }
        default:
        return state
    }
}
