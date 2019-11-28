import React, { Component } from "react";
import ShelfChanger from "./ShelfChanger";

class Book extends Component {
  render() {
    const { book, options, onSelect, shelf } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${book.imageLinks.thumbnail}")`
            }}
          ></div>
          <ShelfChanger
            shelf={shelf}
            book={book}
            options={options}
            onSelect={onSelect}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors.map(author => (
            <p key={author}>{author} </p>
          ))}
        </div>
      </div>
    );
  }
}

export default Book;
