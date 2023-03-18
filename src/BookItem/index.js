import {Link} from 'react-router-dom'
import './index.css'

const BookItem = (props) =>{
    const {BookData} = props
    return (
        <li className='booklist-item' key={BookData.id}>
            <Link to={`/book/${BookData.id}`} className="link-item">
            <h1 className='book-name'>{BookData.bookName}</h1>
            <p className='author-name'>by - {BookData.authorName}</p>
            </Link>
        </li>
    )
}

export default BookItem