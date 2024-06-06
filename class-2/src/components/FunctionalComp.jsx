/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function FunctionalComp({title, features}) {

  let list = [];
  for (const [key, value] of Object.entries(features)) {
    list.push(<li key={key}>{value}</li>);
  }

  return (
    <>
    <h2>{title}</h2>
    <ul>
      {list}
    </ul>
    </>
  )
}

export default FunctionalComp