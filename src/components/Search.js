import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

class Search extends Component {
  state = {
    query: ""
  };

  handleChange = e => {
    const { onSearchBooks } = this.props;
    const query = e.target.value;
    this.setState({ query }, () => {
      onSearchBooks(query);
    });
    //onSearchBooks(query);
  };

  checkShelf = (books, book) => {
    const shelf = books.filter(b => b.id === book.id).map(b => b.shelf);
    //console.log(shelf);
    if (shelf.length === 1) {
      return shelf[0];
    } else {
      return "none";
    }
  };

  /* handleChange = e => {
    const { onSearchBooks } = this.props;
    const query = e.target.value;
    onSearchBooks(query);
  }; */

  render() {
    const { options, onSelect, searchBooks, onReset, books } = this.props;
    const { query } = this.state;

    //const searchBooks = query === "" ? [] : onSearchBooks(query);

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" onClick={onReset}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              value={query}
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchBooks
              .filter(
                book =>
                  book.imageLinks !== undefined && book.authors !== undefined
              )
              .map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    options={options}
                    onSelect={onSelect}
                    shelf={this.checkShelf(books, book)}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
