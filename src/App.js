import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Shelf from "./components/Shelf";
import Search from "./components/Search";

class BooksApp extends Component {
  state = {
    books: [],
    searchBooks: [],
    options: ["currentlyReading", "wantToRead", "read", "none"]
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }

  handleSelect = (book, shelf) => {
    BooksAPI.update(book, shelf);
    if (shelf === "none") {
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id)
      }));
    } else {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }));
    }
  };

  handleSearchBooks = query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(searchBooks => {
        if (searchBooks.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks });
          //console.log("Searched Books:", this.state.searchBooks);
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  };

  handleReset = () => {
    this.setState({ searchBooks: [] });
  };

  render() {
    //console.log("Books", this.state.books);
    const { options, books, searchBooks } = this.state;

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <Shelf
                options={options}
                books={books}
                onSelect={this.handleSelect}
              />
              <Link to="/search" className="open-search">
                <button>Add a book</button>
              </Link>
            </div>
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search
              searchBooks={searchBooks}
              onSearchBooks={this.handleSearchBooks}
              options={options}
              onSelect={this.handleSelect}
              onReset={this.handleReset}
              books={books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
