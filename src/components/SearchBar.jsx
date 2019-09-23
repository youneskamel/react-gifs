import React from "react";


class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {};

  }

  handleChange = (event) => {
    this.props.searchFunction(event.target.value);
  }


  render() {
    return (
      <input type="text"  onChange={this.handleChange} className="form-search" textValue={this.state.input} placeholder="search for stuff"/>
    );
  }
};

export default SearchBar;
