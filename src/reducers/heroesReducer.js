import {createReducer} from '@reduxjs/toolkit';
import { heroesFetching, heroesFetched, heroesFetchingError, heroesAdd, heroesDelete  } from './../actions';

const initialState = {
   heroes: [],
   heroesLoadingStatus: 'idle',
}

export const heroesReducer = createReducer(initialState, (builder) => {
    builder.addCase(heroesFetching, state => {state.heroesLoadingStatus = 'loading'})
            .addCase(heroesFetched, (state, action) => {state.heroes = action.payload
                                            state.heroesLoadingStatus = 'idle'})
            .addCase(heroesFetchingError, state => {state.heroesLoadingStatus = 'error'})
            .addCase(heroesAdd, (state, action) => {state.heroes.push(action.payload)})
            .addCase(heroesDelete, (state, action) => {state.heroes = state.heroes.filter(el => el.id !== action.payload)})
            .addDefaultCase(() => {})
})

// export const heroesReducer = (state = initialState, action) => {
//    switch (action.type) {
//        case 'HEROES_FETCHING':
//            return {
//                ...state,
//                heroesLoadingStatus: 'loading'
//            }
//        case 'HEROES_FETCHED':
//            return {
//                ...state,
//                heroes: action.payload,
//                heroesLoadingStatus: 'idle'
//            }
//        case 'HEROES_FETCHING_ERROR':
//            return {
//                ...state,
//                heroesLoadingStatus: 'error'
//            }
//        case 'HEROES_DELETE': 
//            return {
//                ...state,
//                heroes: state.heroes.filter(el => el.id !== action.payload),
//            }
//        case 'HEROES_ADD': 
//            return {
//                ...state,
//                heroes: [...state.heroes, action.payload],
//            }
//        default: return state
//    }
// }