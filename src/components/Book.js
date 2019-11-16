import React, { Component } from "react";

class Book extends Component {
  render() {
    const { book } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `${book}`
            }}
          ></div>
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
