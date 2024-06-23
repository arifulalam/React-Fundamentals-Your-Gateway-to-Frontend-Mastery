/* eslint-disable no-unused-vars */
import React from 'react';
import { useLocation } from 'react-router-dom';

function Products() {
  const location = useLocation();
  console.log(location);

  return (
    <div>Products</div>
  )
}

export default Products