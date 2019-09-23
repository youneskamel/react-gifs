import React from 'react';
// import giphy from 'giphy-api';
import SearchBar from './SearchBar';
import SelectedGif from './SelectedGif';
import GifList from './GifList';

const GIPHY_API_KEY = "NBZZl4fmemk9tbLPQjBRMU5YUoaVW8o6";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      selectedGifId: "QXPmPdudTz4So2P4OQ"
    };
    this.search("bayern")
  }

   search = (query) => {
     fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${GIPHY_API_KEY}&limit=10`)
      .then(response => response.json())
      .then(data => this.setState({ gifs: data.data }));
  }

  selectedGifId = (id) => {
    this.setState({selectedGifId: id})
  }



  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <SelectedGif selectId={this.state.selectedGifId}/>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectId={this.selectedGifId}/>
        </div>
      </div>

     );
   }
};

export default App;
