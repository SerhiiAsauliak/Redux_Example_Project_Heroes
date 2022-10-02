import { legacy_createStore as createStore, 
         combineReducers,
         compose, 
         applyMiddleware } from 'redux';
import {filtersReducer} from '../reducers/filtersReducer';
import {heroesReducer} from '../reducers/heroesReducer';
import ReduxThunk from 'redux-thunk';

const stringMiddleware = () => (next) => (action) => {
   if(typeof action === 'string'){
      return next({type:action})
   }
   return next(action)
}

const store = createStore(combineReducers({
   filtersReducer, 
   heroesReducer
}), compose(applyMiddleware(ReduxThunk, stringMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;

