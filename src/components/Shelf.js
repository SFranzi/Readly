import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
  shelfName = option => {
    switch (option) {
      case "currentlyReading":
        return "Currently Reading";
      case "wantToRead":
        return "Want To Read";
      case "read":
        return "Read";
      default:
        return null;
    }
  };

  render() {
    const { options, books, onSelect } = this.props;

    return (
      <div className="list-books-content">
        <div>
          {options
            .filter(option => option !== "none")
            .map(option => (
              <div key={option} className="bookshelf">
                <h2 className="bookshelf-title">{this.shelfName(option)}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books
                      .filter(book => option === book.shelf)
                      .map(book => (
                        <li key={book.id}>
                          <Book
                            book={book}
                            options={options}
                            onSelect={onSelect}
                            shelf={book.shelf}
                          />
                        </li>
                      ))}
                  </ol>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Shelf;
