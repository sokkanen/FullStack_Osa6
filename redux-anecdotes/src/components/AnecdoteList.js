import React from 'react'
import { connect } from 'react-redux'
import {vote} from '../reducers/anecdoteReducer'
import {setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

    const voteAnecdote = (id) => {
        props.vote(id)
        voteMessage(id)
    }

    const voteMessage = (id) => {
      const message = props.anecdotes.filter(a => a.id === id)[0].content
      props.setNotification(`You voted '${message}'`, 2)
    }

    return (
        <div>
          <h2>Anecdotes</h2>
          {props.anecdotes.map(anecdote =>
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

const visibleAnecdotes = ({anecdotes, filter}) => {
  return anecdotes.filter(a => a.content.includes(filter))
}

const mapStateToProps = (state) => {
  return {
    anecdotes: visibleAnecdotes(state)
  }
}

const mapDispatchToProps = {
  vote,
  setNotification
}
const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteList)
export default ConnectedAnecdoteList