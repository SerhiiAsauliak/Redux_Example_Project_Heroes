import heroes from '../components/heroesList/heroesSlice';
import filters from '../components/heroesFilters/filtersSlice';
import {configureStore} from '@reduxjs/toolkit';

const stringMiddleware = () => (next) => (action) => {
   if(typeof action === 'string'){
      return next({type:action})
   }
   return next(action)
}

const store = configureStore({
   reducer: {filters, heroes},
   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
   devTools: true
})

export default store;

