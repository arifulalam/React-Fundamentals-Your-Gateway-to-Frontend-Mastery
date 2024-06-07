/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = (props) => {  
  let list = [];

  for (const [key, value] of Object.entries(props.menu)) {
    list.push(<li key={key} className='flex pt-2 pb-2 pl-2 pr-2'><a href={value.url}>{value.text}</a></li>);
  }

  return (
    <nav>
      <div className='container-full pt-2 pb-2 pl-2 pr-2'>
        <div className='flex justify-between'>
          <div className=''>
            <img src={props.logo}/>
          </div>
          <div className=''>
            <ul className='flex justify-center'>
              {list}
            </ul>
          </div>
          <div className=''>
            <button type='button' className='rounded-full bg-slate-800 hover:bg-blue-700  text-white pl-5 pr-5 pt-1 pb-1 text-align-left'>Login</button>
          </div>
        </div>
      </div>
      <hr/>      
    </nav>
  )
}

export default Navbar