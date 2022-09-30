   
const initialState = {
   filters: [],
   activeFilter: 'all',
}

export const filtersReducer = (state = initialState, action) => {
   switch (action.type) {
       case 'SET_FILTERS':
           return {
               ...state,
               filters: action.payload
           }
       case 'ACTIVE_FILTER_CHANGED':
           return {
               ...state,
               activeFilter: action.payload,
           }
       default: return state
   }
}