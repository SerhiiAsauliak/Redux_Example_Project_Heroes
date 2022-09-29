export const setFilters = (filters) => {
   return {
       type: 'SET_FILTERS',
       payload: filters
   }
}

export const activeFilterChanged = (filter) => {
   return {
       type: 'ACTIVE_FILTER_CHANGED',
       payload: filter
   }
}

