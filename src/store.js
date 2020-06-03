import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const logMiddleware = ({getState}) => (next) => (action) => {
    console.log(action.type, getState());
    return next(action);
}

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string'){
        return next({
            type: action
        })
    }
    return next(action);
}



const store = createStore(reducer, applyMiddleware(
    thunkMiddleware, stringMiddleware, logMiddleware));

    const myAction = (dispatch) => {
        setTimeout( () => dispatch({
            type: 'DELAYED_ACTION'
        }), 2000)
    }
    store.dispatch(myAction);
    

export default store;