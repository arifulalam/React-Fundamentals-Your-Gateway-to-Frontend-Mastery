/* eslint-disable no-unused-vars */
import React from 'react'

// eslint-disable-next-line react/prop-types
export const Footer = ({menu}) => {
    let list = [];
    for (const [key, value] of Object.entries(menu)) {
        list.push(<li key={key} className='flex pt-2 pb-2 pl-2 pr-2'><a href={value.url}>{value.text}</a></li>);
    }
  
    return (
        <footer className='pt-2 pb-2 pl-2 pr-2 bg-black text-white'>
            <div className='flex justify-evenly'>
                <div className='text-left'>
                    <ul>{list}</ul>
                </div>
                <div>Column II</div>
                <div>Column III</div>
                <div>Column IV</div>
            </div>
        </footer>
    )
}
