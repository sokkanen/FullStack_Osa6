import React from 'react';

const App = (props) => {

  const store = props.store
  const anecdotes = store.getState()
  
  const vote = (id) => {
    store.dispatch({
      type: 'VOTE',
      data: {id}
    })
  }

  const newAnecdote = (event) => {
    event.preventDefault()
    store.dispatch({
      type: 'NEW',
      data: {
        content: event.target.new.value
      }
    })
  }
  
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((a,b) => a.votes > b.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div><input name="new"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App
