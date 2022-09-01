import axios from 'axios';
import React, { useEffect, useState } from 'react'



const url = `https://example-data.draftbit.com/books?_limit=250`
const Api = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get(url)
            setBooks(res.data)
            console.log(res.data)
        }
        fetchBooks()
    }, [])

    return (
        <div>
        </div>
    )
}
export default Api;
