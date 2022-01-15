import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import catsReducer from './reducer/Cats-reducer'


let reducers = combineReducers({
    cats: catsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.store = store;
export default store;