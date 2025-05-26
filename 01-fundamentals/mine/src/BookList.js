import React from 'react'
 
import './index.css';

const BookList = () => {
  return (
    <>
        <section className="booklist">
          <Book/>
          <Book/>
          <Book/>
          <Book/>
        </section>
    </>
  )
}

const Book = () => {
  return(
    <article className="book">
      <Image/>
      <Title/>
      <Author/>
    </article>
  )
}

const Image = () => {
  return <img src="https://m.media-amazon.com/images/I/91bqp45rHoL._SY466_.jpg" alt=""/>
}

const Title = () => {
  return <h2>Sonic The Hedgehog (2018-) #46</h2>
}

const Author = () => <h4>Evan Stanley</h4>

export default BookList