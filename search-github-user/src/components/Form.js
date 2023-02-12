import React from 'react';

function Form({onSubmit, onChange, value}) {
  return (
    <form className='search-form' onSubmit={onSubmit}>
        <input 
            id=""
            type="text"
            placeholder="Enter username"
            value={value}
            onChange={onChange}
        />
        <button type="submit">Search</button>
    </form>
  )
}

export default Form;