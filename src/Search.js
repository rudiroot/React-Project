import React, { Component } from 'react';
import Results from './Results.js';

// Daten für die Suche
const database = [{
  songname: "Michael Jackson - beat it"
},
{
  songname: "Peter Maffay - XYZ"
},
{
  songname: "Iron Maiden - XYZ"
}
];

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      filteredData: ""
    };
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
        <Results resultdata={this.filterByTerm(database,this.state.searchTerm )} />
      </div>
    )
  }
}

export default Search;
