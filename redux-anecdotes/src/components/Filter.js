import React from 'react'
import { connect } from 'react-redux'
import {set_filter} from '../reducers/filterReducer'

const Filter = (props) => {

    const handleChange = (event) => {
        props.set_filter(event.target.value)
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

const mapDispatchToProps = {
    set_filter
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)

export default ConnectedFilter