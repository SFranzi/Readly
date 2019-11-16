import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

class Shelf extends Component {
  render() {
    const { options, books } = this.props;

    return (
      <React.Fragment>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {options.map(option => (
                <div key={option} className="bookshelf">
                  <h2 className="bookshelf-title">{option}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books
                        .filter(book => option === book.shelf)
                        .map(book => (
                          <li key={book.id}>
                            <Book book={book} />
                          </li>
                        ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link to="/search" className="open-search">
          <button>Add a book</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Shelf;
