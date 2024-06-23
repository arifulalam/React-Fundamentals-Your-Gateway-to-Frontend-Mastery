/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const location = useParams();
    console.log(location);
  return (
    <div>Single Product</div>
  )
}

export default Product