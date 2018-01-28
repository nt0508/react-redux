import { createStore } from 'redux'
import { VIEW_TYPE } from './constants/ActionTypes'


const defaulState = {
    viewType: false,
};

const reducer = ( state = defaulState, action) => {
    switch(action.type) {
        case VIEW_TYPE:
        return {viewType: !state.viewType}
    }
    return state
}

export default reducer;