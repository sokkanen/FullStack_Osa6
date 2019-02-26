const filterReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_FILTER':
      return action.data
      default: return state
    }
  }
  
  export default filterReducer

  export const set_filter = (filter) => {
    return (
      {
      type: 'SET_FILTER',
      data: filter 
      }
    )
  }