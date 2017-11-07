import React, { Component } from 'react';
import Results from './Results.js';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      filteredData: "",
      songs: [],
      artists: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:2403/songs')
      .then(result => result.json())
      .then(songs => this.setState({ songs }))
      .catch(console.error)

    fetch('http://localhost:2403/artists')
      .then(result => result.json())
      .then(artists => {
        console.log('fetch art', artists);
        this.setState({ artists });
      })
      .catch(console.error)
  }

  onChange = (event) => {
    const input = event.target.value;
    this.setState({
      searchTerm: input
    })
    console.log(this.state);
  }

  getArtistbyID(artistId) {
    fetch('http://localhost:2403/artists/' + artistId)
      .then(result => result.json())
      .then(artist => this.setState({ artist }))
      .catch(console.error)
  }

  filterByTerm(list, term) {
    console.log('filterByTerm ', list);
    return list.filter((element) => {
      return element && element.includes(term);
    });
  }

  mergeSongToArtist(allsongs, allartist) {
    let mergedList = [];

    if (allsongs.length > 0 && allartist.length > 0) {    
      console.log(allartist);
      console.log(allsongs);
      mergedList = allsongs.map(function (song) {
        const artist = allartist.find(function (artist) {
          return artist.id === song.artistId;
        });
  
        return song.title + artist.name;
      })
    }
    console.log('merged list', mergedList);

    return mergedList;
  }

  render() {

    return (
      <div className="SearchField">
        <form>
          <input type="text" name="search" onChange={this.onChange} />
        </form>

        {/*<Results resultdata={this.filterByTerm(this.state.songs, this.state.searchTerm)} />*/}
        {<Results resultdata={
          this.filterByTerm(
            this.mergeSongToArtist(
              this.state.songs,
              this.state.artists),
            this.state.searchTerm)} />}
      </div>
    )
  }
}

export default Search;
