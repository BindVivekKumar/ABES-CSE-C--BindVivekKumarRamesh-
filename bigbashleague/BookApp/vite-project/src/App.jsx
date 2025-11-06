import React from 'react'
import Book from './Componenet/Book'
import './App.css'
import Nav from './Componenet/Nav'
function App() {
  return (
    <>
      <Nav />
      <br />
      <div id="adi">
        <Book title="Physice" price="800" img='https://unsw-prod.s3.amazonaws.com/media/images/9781454957805_YEBFtDk.width-1000.jpg' />
        <Book title="Math" price="1200" img='https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328768386i/6393242.jpg' />
        <Book title="Chemistry" price="1000" img='https://m.media-amazon.com/images/I/71QENhDe4eL._AC_UF1000,1000_QL80_.jpg' />
      </div>
    </>
  )
}

export default App