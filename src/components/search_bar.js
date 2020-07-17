/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: '' };
  }

  // eslint-disable-next-line class-methods-use-this
  onInputChange = (event) => {
    this.setState({ searchterm: event.target.value });
    this.props.onSearchChange(event.target.value);
    console.log(event.target.value);
  }

  render() {
    return (
      <div id="nav-bar">
        <div id="logo">TouYube</div>
        <form>
          <input onChange={this.onInputChange} value={this.state.searchterm} />
          <button type="submit"><i className="fa fa-search" /></button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
