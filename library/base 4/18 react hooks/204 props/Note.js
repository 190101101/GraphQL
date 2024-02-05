import React from 'react'

const Note = (props) => {
  return (
    <div style={{color: props.color}}>{props.note}</div>
  )
}

export default Note