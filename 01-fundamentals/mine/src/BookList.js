import React from 'react'
 
import './index.css';

const books =[
  {
    author :"Evan Stanley",
    title : "Sonic The Hedgehog (2018-) #46",
    img : "https://m.media-amazon.com/images/I/51HkeecClwL._SY445_SX342_PQ26_.jpg",
    id: 1
  },
  {
    author :"Evan Stanley",
    title : "Sonic the Hedgehog: Imposter Syndrome #1 (of 4)",
    img : "https://m.media-amazon.com/images/I/91tV6oUj89L._SY466_.jpg",
    id: 2,
  }
]


const EventEx = () =>{
  const handleFormInput = (e) =>{
    console.log(e);
  }
  const handleButtonClick = () =>{
    alert("test");
  }

  return(
    <section>
      <form>
        <h2>Form</h2>
        <input type="text" name="example" onChange={handleFormInput}  style={{margin: "1rem 0"}} />
      </form>
      <button onClick={handleButtonClick} >click me</button>
    </section>
  )
}

const Book = (props) => {
  const {img, title, author} = props;
  return(
    <article className="book">
      <img src={img} alt=""/>
      <h4>{author}</h4>
      <h2>{title}</h2>
    </article>
  )
}

const books_map = books.map((book)=>{
  return(
    <Book {...book} key={book.id}/>
  )
});
 

const BookList = () => {
  return (
    <>
        <section className="booklist">
          <EventEx/>
          {books_map}
        </section>;
    </>
  )
}





export default BookList