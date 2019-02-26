import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import anecdoteService from './services/anecdotes'
import {initialize} from './reducers/anecdoteReducer'

const App = (props) => {

  useEffect(() => {
    anecdoteService
      .getAll().then(a => props.initialize(a))
  },[])

  return (
    <div>
      <Notification/>
      <Filter/>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

const ConnectedApp = connect(null, { initialize })(App)

export default ConnectedApp
