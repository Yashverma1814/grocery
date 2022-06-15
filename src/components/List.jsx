import React from 'react'

const List = (props) => {

    function del () {
        props.list.shift();
    }
  return (
    <div>
      <h1>{props.list[0]}</h1>
      <button onClick={del}>Delete</button>
    </div>
  )
}

export {List};
