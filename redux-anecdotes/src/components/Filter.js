import React from 'react'
import {set_filter} from '../reducers/filterReducer'

const Filter = (props) => {
    
    const store = props.store
    
    const handleChange = (event) => {
        store.dispatch(set_filter(event.target.value))
    }
    const style = {
        marginBottom: 10
    }

    return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter