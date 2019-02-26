import anecdoteService from '../services/anecdotes'

const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
    const id = action.data.id
    const anecdoteToVote = state.find(a => a.id === id)
    const votedAnecdote = {...anecdoteToVote, votes: anecdoteToVote.votes +1}
    const anecdotes = state.map(a => a.id === id ? votedAnecdote: a).sort((a,b) => b.votes - a.votes)
    return anecdotes
    case 'NEW':
    const anecdote = asObject(action.data.content)
    return state.concat(anecdote)
    case 'INIT_ANEC':
    return action.data
    default: return state
  }
}

export default reducer

export const vote = (id) => {
  return async dispatch => {
    await anecdoteService.update(id)
    dispatch({
      type: 'VOTE',
      data: {id}
    })
  }
}

export const initialize = () => {
  return async dispatch => {
    const anecs = await anecdoteService.getAll()
    dispatch ({
      type: 'INIT_ANEC',
      data: anecs
      })
  }
}

export const newAnecdote = (content) => {
  return async dispatch => {
    await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW',
      data: {
        content: content
      }
    })
  }
}