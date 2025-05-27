import React from 'react'
 
import './index.css';
import { books } from './books';


const Book = (props) => {
  const {img, title, author,value} = props;
  return(
    <article className="book">
      <span className='number' >#{value+1}</span>
      <img src={img} alt=""/>
      <h4>{author}</h4>
      <h2>{title}</h2>
    </article>
  )
}

const books_map = books.map((book, index)=>{
  return(
    <Book {...book} key={book.id} value = {index} />
  )
});
 
const BookList = () => {
  
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books_map}
      </section>;
    </>
  )
}

export default BookList