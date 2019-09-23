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

      <input type="text" defaultValue="Bayern" onChange={this.handleChange} className="form-control form-search" textValue={this.state.input}/>
    );
  }
};

export default SearchBar;
