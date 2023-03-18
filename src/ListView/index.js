import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import books from '../books.json'
import './index.css'

const Home = () =>{
    return(
        <div className="main-container">
            <div><Navbar/></div>
            <div className='bookslist-view'>
            <ul className="unordered-list">
                {books.map(book => (
                    <li className='booklist-item' key={book.id}>
                    <Link to={`/book/${book.id}`} className="link-item">
                    <h1 className='book-name'>{book.bookName}</h1>
                    <p className='author-name'>by - {book.authorName}</p>
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        </div>
    )
}

export default Home