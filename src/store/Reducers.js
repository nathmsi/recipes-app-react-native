
import {
    HANDLE_INPUT_CHANGED
} from './Action'


const INITIAL_STATE = {
    value: '',
    data: []
};



export const SearchReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type){
        case HANDLE_INPUT_CHANGED:
            return { ...state , value: action.payload.value,   data: action.payload.data }
        default : 
            return state;
    }
}