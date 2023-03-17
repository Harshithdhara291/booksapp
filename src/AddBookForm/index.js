import { useState } from 'react'
import Navbar from '../Navbar'
import {v4 as uuidv4} from 'uuid'
import books from '../books.json'
import './index.css'
const AddBook = () =>{
    const [book,setBook] = useState({"id":uuidv4(),"bookName":"","authorName":""})

    function submit(e){
        books.unshift(book)
        setBook({"bookName":"","authorName":""})
        alert("Book added successfully")
        e.preventDefault()
    }

    function handle(e){
        const newBook = {...book}
        newBook[e.target.id] = e.target.value
        console.log(newBook)
        setBook(newBook)
    }

    return(
        <div>
            <div><Navbar/></div>
            <div className='container'>
            <h1 className='mybook-head'>MY BOOKLIST</h1>
            <form className='form-container' onSubmit={(e)=>submit(e)}>
                <label className='label' htmlFor='bookName'>Title</label>
                <input onChange={(e)=>handle(e)} type='text' className="input"  id='bookName' placeholder='Enter Book title' required/>
                <label className='label' htmlFor='authorName'>Author</label>
                <input onChange={(e)=>handle(e)} type='text' className="input"  id='authorName' placeholder='Enter Author Name' required/>
                <button type="submit" className='button'>Add Book</button>
            </form>
            </div>
        </div>
    )
}

export default AddBook