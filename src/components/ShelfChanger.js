import React, { Component } from "react";

class ShelfChanger extends Component {
  handleChange = e => {
    const { onSelect, book } = this.props;
    const { value } = e.target;
    onSelect(book, value);
  };

  render() {
    const { options, shelf } = this.props;
    //console.log(shelf);
    return (
      <div className="book-shelf-changer">
        <select value={shelf} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
