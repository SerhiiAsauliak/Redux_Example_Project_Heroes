export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching())
    request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))
}

export const heroesFetching = () => {
   return {
       type: 'HEROES_FETCHING'
   }
}

export const heroesFetched = (heroes) => {
   return {
       type: 'HEROES_FETCHED',
       payload: heroes
   }
}

export const heroesFetchingError = () => {
   return {
       type: 'HEROES_FETCHING_ERROR'
   }
}

export const heroesAdd = (data) => {
    return {
        type: 'HEROES_ADD',
        payload: data
    }
 }

 export const heroesDelete = (id) => {
    return {
        type: 'HEROES_DELETE',
        payload: id
    }
 }