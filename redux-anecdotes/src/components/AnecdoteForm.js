import React from 'react'
import { connect } from 'react-redux'
import {newAnecdote} from '../reducers/anecdoteReducer'
import {setNotification } from '../reducers/notificationReducer'

const Anecdoteform = (props) => {

    const createNew = (event) => {
        event.preventDefault()
        const value = event.target.new.value
        event.target.new.value = ''
        props.setNotification(`New anecdote '${value}' created`, 2)
        props.newAnecdote(value)
    }

    return (
        <div>
            <h2>create new</h2>
                <form onSubmit={createNew}>
                    <div><input name="new"/></div>
                    <button>create</button>
                </form>
        </div>
    )
}

const mapDispatchToProps = {
    newAnecdote,
    setNotification
}

const ConnectedAnecdoteform = connect(null, mapDispatchToProps)(Anecdoteform)

export default ConnectedAnecdoteform