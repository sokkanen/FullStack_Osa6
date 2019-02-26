import React from 'react'
import {newAnecdote} from '../reducers/anecdoteReducer'
import {new_message, zero} from '../reducers/notificationReducer'

const Anecdoteform = (props) => {

    const createNew = (event) => {
        event.preventDefault()
        const value = event.target.new.value
        event.target.new.value = ''
        props.store.dispatch(newAnecdote(value))
        props.store.dispatch(new_message(value))
        setTimeout(() => {
            props.store.dispatch(zero())
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

export default Anecdoteform