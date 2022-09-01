import axios from 'axios';
import React, { useEffect, useState } from 'react'



const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=RR5gU5x7yoqJlYOMPcTexK560Ei7eofG`
const Api = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get(url)
            setBooks(res.data.results.books)
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
