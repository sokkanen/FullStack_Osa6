import React from 'react'
import {newAnecdote} from '../reducers/anecdoteReducer'

const Anecdoteform = (props) => {

    const createNew = (event) => {
        event.preventDefault()
        props.store.dispatch(newAnecdote(event.target.new.value))
        event.target.new.value = ''
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