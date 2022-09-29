const initialState = {
   heroes: [],
   heroesDelitingStatus: 'idle',
   filters: []
}

export const fetchReducer = (state = initialState, action) => {
   switch (action.type) {
       case 'HEROES_FETCHING':
           return {
               ...state,
               heroesDelitingStatus: 'deliting'
           }
       case 'HEROES_FETCHED':
           return {
               ...state,
               heroes: action.payload,
               heroesDelitingStatus: 'idle'
           }
       case 'HEROES_FETCHING_ERROR':
           return {
               ...state,
               heroesDelitingStatus: 'error'
           }
       default: return state
   }
}