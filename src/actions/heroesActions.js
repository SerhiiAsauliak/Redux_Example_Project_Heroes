import {createAction} from '@reduxjs/toolkit';

export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching())
    request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))
}

export const heroesFetching = createAction('HEROES_FETCHING');
// export const heroesFetching = () => {
//    return {
//        type: 'HEROES_FETCHING'
//    }
// }

export const heroesFetched = createAction('HEROES_FETCHED');
// export const heroesFetched = (heroes) => {
//    return {
//        type: 'HEROES_FETCHED',
//        payload: heroes
//    }
// }

export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR'); 
// export const heroesFetchingError = () => {
//    return {
//        type: 'HEROES_FETCHING_ERROR'
//    }
// }

export const heroesAdd = createAction('HEROES_ADD');
 
// export const heroesAdd = (data) => {
//     return {
//         type: 'HEROES_ADD',
//         payload: data
//     }
//  }

 export const heroesDelete = createAction('HEROES_DELETE');

//  export const heroesDelete = (id) => {
//     return {
//         type: 'HEROES_DELETE',
//         payload: id
//     }
//  }