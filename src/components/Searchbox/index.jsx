import React from 'react'

const Searchbox = (props) => {
    return (
        <input type='search'
            className='Search'
            placeholder="Búsqueda..."
            onChange={props.handleChange}
        />
    )
}
export default Searchbox;