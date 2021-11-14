import React from 'react'


const Searchbox = (props) =>{
    return(
        <input type='search'
        className='Search'
        placeholder="Sobrevive" 
        onChange = {props.handleChange}
        />
    )
}
export default Searchbox