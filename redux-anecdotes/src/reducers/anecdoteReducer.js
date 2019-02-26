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
  return (
    {
    type: 'VOTE',
    data: {id}
    }
  )
}

export const initialize = (notes) => {
  return ({
    type: 'INIT_ANEC',
    data: notes
    })
}

export const newAnecdote = (content) => {
  return (
    {
    type: 'NEW',
    data: {
      content: content,
    }
    }
  )
}