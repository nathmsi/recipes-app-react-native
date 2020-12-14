// redux
import { combineReducers, createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'


// reducers
import {
    SearchReducer
} from './Reducers'



const reducers = combineReducers({
    search: SearchReducer,
})


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export {
    store
}