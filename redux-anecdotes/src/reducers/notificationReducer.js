
  const notificationReducer = (state = null, action) => {
    switch (action.type) {
      case 'VOTE_MESSAGE':
      return `You voted '${action.data}'`
      case 'NEW_MESSAGE':
      return `New anecdote '${action.data}' created`
      case 'ZERO':
      return null
      default: return state
    }
  }
  
  export default notificationReducer

  export const vote_message = (message) => {
    return (
      {
      type: 'VOTE_MESSAGE',
      data: message 
      }
    )
  }

  export const new_message = (content) => {
    return (
      {
      type: 'NEW_MESSAGE',
      data: content
      }
    )
  }

  export const zero = () => {
    return (
      {
      type: 'ZERO',
      }
    )
  }