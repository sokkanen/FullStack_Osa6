import React from 'react';
import {vote} from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'

const App = (props) => {

  const store = props.store
  const anecdotes = store.getState()

  const voteAnecdote = (id) => {
    store.dispatch(vote(id))
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
            <button onClick={() => voteAnecdote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <AnecdoteForm store={props.store}/>
    </div>
  )
}

export default App
