import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import Shelf from "./components/Shelf";
import Search from "./components/Search";

class BooksApp extends Component {
  state = {
    books: [],
    options: ["currentlyReading", "wantToRead", "read"]
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }

  render() {
    console.log("Books", this.state.books);
    const { options, books } = this.state;

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <Shelf options={options} books={books} />}
        />
        <Route path="/search" render={() => <Search books={books} />} />
      </div>
    );
  }
}

export default BooksApp;
