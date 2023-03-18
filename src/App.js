import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './ListView/index'
import AddBook  from './AddBookForm';
import BookDetails from './BookDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/addbook" element={<AddBook/>} />
      <Route exact path="/book/:id" element={<BookDetails/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
