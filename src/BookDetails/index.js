import books from '../books.json'
import Navbar from '../Navbar';
import './index.css'

const BookDetails = () =>{
    let pathArray = window.location.pathname.split('/');
    const lastEl = pathArray.slice(-1)[0]
    const obj = books.filter(each =>(
        each.id == lastEl
    ))
    const {id,bookName,authorName} = obj[0]
    return (
        <>
        <div><Navbar/></div>
        <div className='bookitem' key={id}>
            <h1 className='book-name-detail'>{bookName}</h1>
            <p className='author-name-detail'>by - {authorName}</p>
        </div>
        </>
    )
}

export default BookDetails