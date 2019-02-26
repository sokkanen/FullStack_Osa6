import React from 'react'
import { connect } from 'react-redux'
import {newAnecdote} from '../reducers/anecdoteReducer'
import {new_message, zero} from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const Anecdoteform = (props) => {

    const createNew = async (event) => {
        event.preventDefault()
        const value = event.target.new.value
        event.target.new.value = ''
        props.newAnecdote(value)
        props.new_message(value)
        await anecdoteService.createNew(value)
        setTimeout(() => {
            props.zero()
        }, 5000);
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
    new_message,
    zero,
    newAnecdote
}

const ConnectedAnecdoteform = connect(null, mapDispatchToProps)(Anecdoteform)

export default ConnectedAnecdoteform