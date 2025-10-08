import React from 'react'

const Search = ({searchTerm,setSearchTerm}) => {
    
    return (
    <div className='search'>
        <div>
            <img src='./search.svg' alt='Search_Icon'/>
            <input
            type='text'
            placeholder='Search the cinematic universe…'
            value={searchTerm}
            onChange={(event)=>setSearchTerm(event.target.value)}
            />
        </div>
    </div>
  )
}

export default Search
