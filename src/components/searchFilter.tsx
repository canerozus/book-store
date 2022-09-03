import React from 'react'
import Api from '../Api'
import Search from '@mui/icons-material/Search'

function searchFilter({books,setBooks}) {
  return (
    <ul>
        {books.map((books) => (
            <li className='listItem'>{books.name}</li>
        
        ))}

    </ul>
  )
}

export default searchFilter