import React from 'react'
import {vote} from '../reducers/anecdoteReducer'
import {vote_message, zero} from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const store = props.store
    const anecdotes = store.getState().anecdotes

    const voteAnecdote = (id) => {
        store.dispatch(vote(id))
        voteMessage(id)
    }

    const voteMessage = (id) => {
      const message = anecdotes.filter(a => a.id === id)[0].content
      store.dispatch(vote_message(message))
      setTimeout(() => {
        store.dispatch(zero())
      }, 5000)
    }

    return (
        <div>
          <h2>Anecdotes</h2>
          {anecdotes.map(anecdote =>
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
        </div>
      )
}

export default AnecdoteList