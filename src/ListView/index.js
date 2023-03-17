import Navbar from '../Navbar'
import books from '../books.json'

import './index.css'

const Home = () =>{
    return(
        <div className="main-container">
            <div><Navbar/></div>
            <div className='bookslist-view'>
            <ul className='unordered_list'>
                {books.map(book =>{
                    return (
                        <li className='booklist-item' key={book.id}>
                            <h1 className='book-name'>{book.bookName}</h1>
                            <p className='author-name'>by - {book.authorName}</p>
                        </li>
                    )
                })}
            </ul>
            </div>
        </div>
    )
}

export default Home