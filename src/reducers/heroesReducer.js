const initialState = {
   heroes: [],
   heroesLoadingStatus: 'idle',
}

export const heroesReducer = (state = initialState, action) => {
   switch (action.type) {
       case 'HEROES_FETCHING':
           return {
               ...state,
               heroesLoadingStatus: 'loading'
           }
       case 'HEROES_FETCHED':
           return {
               ...state,
               heroes: action.payload,
               heroesLoadingStatus: 'idle'
           }
       case 'HEROES_FETCHING_ERROR':
           return {
               ...state,
               heroesLoadingStatus: 'error'
           }
       case 'HEROES_DELETE': 
           return {
               ...state,
               heroes: state.heroes.filter(el => el.id !== action.payload),
           }
       case 'HEROES_ADD': 
           return {
               ...state,
               heroes: [...state.heroes, action.payload],
           }
       default: return state
   }
}