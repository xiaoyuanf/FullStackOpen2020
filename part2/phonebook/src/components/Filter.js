import React from 'react'

const Filter = (props) => {
    let {filterString,
        handleFilter} = props
    
    return (
        <span>
          filter shown with <input 
            value={filterString}
            onChange={handleFilter} />
      </span>
    )
}

export default Filter