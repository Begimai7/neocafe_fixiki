import React from 'react'

function Test() {
  return (
    <div>
      <label htmlFor="searchInput">Поиск:</label>
      <div className="search-container">
        <input
          type="text"
          id="searchInput"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Введите текст для поиска"
        />
        <div className="search-icon">&#128269;</div>
      </div>
    </div>
  )
}

export default Test
