import React from 'react'

const SearchPanel = () => {
  const searchValue = 'Type here to search'
  const searchStyles = {
    fontSize: '20px'
  }

  return <input
    style={searchStyles}
    placeholder={searchValue}
    disabled
  />
}

export default SearchPanel
