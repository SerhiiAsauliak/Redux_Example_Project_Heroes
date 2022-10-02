import {filtersReducer} from '../reducers/filtersReducer';
import {heroesReducer} from '../reducers/heroesReducer';
import {configureStore} from '@reduxjs/toolkit';

const stringMiddleware = () => (next) => (action) => {
   if(typeof action === 'string'){
      return next({type:action})
   }
   return next(action)
}

const store = configureStore({
   reducer: {filtersReducer, heroesReducer},
   middlware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
   devTools: true
})

export default store;

