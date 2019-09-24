import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const searchIcon = <FontAwesomeIcon className="search-icon"icon={faSearch} />

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
      <div className="searchbar-div">
        {searchIcon}
        <input type="text" defaultValue="Bayern" onChange={this.handleChange} className="form-control form-search" textValue={this.state.input}/>
      </div>

    );
  }
};

export default SearchBar;
