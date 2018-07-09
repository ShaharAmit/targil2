import React, {
  Component
} from 'react'
import Book from './books'
import './includes/borrowedBooks.css';


class borrowedBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
    this.eachBook = this.eachBook.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this)
    this.nextID = this.nextID.bind(this)
  }

  add(data) {
    this.setState(prevState => ({
      books: [
        ...prevState.books,
        {
          id: this.nextID(),
          author: data.author,
          book_name: data.book_name,
          borrower: data.borrower,
          return_date: data.return_date
        }
      ]
    }))
  }
  nextID() {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  componentDidMount() {
    const url =
      "https://borrowed-books.herokuapp.com/getAllBooks";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        var self = this;
        data.map((data) => {
          console.log(data);
          self.add(data);
          return true;
        });
      })
  }

  update(update, i, borrower, return_date) {
    if(update === 'update') {
      this.setState(() => ({
        books: this.state.books.map(
          (book) => (book.id !== i) ? book : { ...book,
            return_date: return_date,
            borrower: {...book.borrower, name: borrower}
          }
        )
      }))
    } else if(update === 'delete') {
      this.delete(i);
    }
  }

  delete(i) {
    let books = this.state.books;
    books.splice(i,1);

    this.setState(prevState => ({
      books: books
    }));
  }

  eachBook(book, i) {
    return ( 
      <div className = "card" style = {{width: 18 + 'rem'}}>
          <Book key = {'book' + i} index = {i} onChange = {this.update} onDelete = {this.onDelete}>
            <div className='bookDetails'>
              <p> 
                <b>author:</b > {book.author} 
              </p> 
              <p > 
                <b>book name:</b > {book.book_name} 
              </p> 
            </div>
            <div className='bookData'>
              <p> 
                <b>borrower name:</b > {book.borrower.name}
              </p>
              <p> 
                <b>return date:</b > {book.return_date}
              </p>
            </div>
          </Book > 
      </div >
    )
  }

  render() {
    return ( 
      <div className = "bookList" > {
        this.state.books.map(this.eachBook)
      } 
      </div >
    )
  }
}
export default borrowedBooks