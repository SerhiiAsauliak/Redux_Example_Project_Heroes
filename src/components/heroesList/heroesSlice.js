import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook'

const heroerAdapter = createEntityAdapter();

// const initialState = {
//    heroes: [],
//    heroesLoadingStatus: 'idle',
// }
const initialState =  heroerAdapter.getInitialState({
   heroesLoadingStatus: 'idle'
});

export const fetchHeroes = createAsyncThunk(
   'heroes/fetchHeroes',
   () => {
      const {request} = useHttp();
      return request("http://localhost:3001/heroes");
   }
);

const heroesSlice = createSlice({
   name: 'heroes',
   initialState,
   reducers: {
      heroesAdd: (state, action) => {heroerAdapter.addOne(state, action.payload)},
      heroesDelete: (state, action) => {heroerAdapter.removeOne(state, action.payload)}
   },
   extraReducers: (builder) => {
      builder.addCase(fetchHeroes.pending, state => {state.heroesLoadingStatus = 'loading'})
            .addCase(fetchHeroes.fulfilled, (state, action) =>
                     {heroerAdapter.setAll(state,action.payload);
                     state.heroesLoadingStatus = 'idle'})
            .addCase(fetchHeroes.rejected, state => {state.heroesLoadingStatus = 'error'})
            .addDefaultCase(() => {})
   }
})

const {actions, reducer} = heroesSlice;

export default reducer;

const {selectAll} = heroerAdapter.getSelectors(state => state.heroes);

export const filteredHeroesSelector = createSelector(
   state => state.filters.activeFilter,
   selectAll,
   (filter, heroes) => {
       if(filter === 'all'){
           return heroes
       }else {
           return heroes.filter(el => el.element === filter)
       }
   }
)

export const {heroesAdd, heroesDelete} = actions;