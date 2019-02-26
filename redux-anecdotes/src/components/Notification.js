import React from 'react';
import {new_message, vote_message} from '../reducers/notificationReducer'

const Notification = (props) => {
  const store = props.store
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (store.getState().message === null){
    return (<div></div>)
  }
  return (
    <div style={style}>
      {store.getState().message}
    </div>
  )
}

export default Notification
