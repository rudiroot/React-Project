import React, { Component } from 'react';
import Results from './Results.js';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      filteredData: "",
      messages: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:2403/songs')
      .then(r => r.json())
      .then(messages => this.setState({ messages }))
      .catch(console.error)
  }

  onChange = (event) => {
    const input = event.target.value;
    this.setState({
      searchTerm: input
    })
    console.log(this.state);
  }

  filterByTerm(list, term) {
    return list.filter((element) => {
      return element.songname.includes(term);
    });
  }

  render() {

    return (
      <div className="SearchField">
        <form>
          <input type="text" name="search" onChange={this.onChange} />
        </form>
        {/*console.log(this.state.messages.songName)*/}

        {<Results resultdata={this.filterByTerm(this.state.messages, this.state.searchTerm)} />}
        {/*console.log(this.state.messages)*/}

      </div>
    )
  }
}

export default Search;
