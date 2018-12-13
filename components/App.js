import React from 'react';
// import axios from 'axios'; refactored to unsplash.js
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

//NOTE: The architecture was to have App make the fetch requests to find images. The SearchBar we kept just to take in text.

class App extends React.Component {
  state = { images: [] }

  //CALLBACK FUNCTION
  onSearchSubmit = async (term) => { //this gets called with our search term. SearchBar.js 5
    const response = await unsplash.get('search/photos', {
      params: { query: term }, //appends ^ ?query={term inside search bar}
  });
    this.setState({images: response.data.results});
  }

//NOTE: if you say async onSearchSubmit = term {...} it won't bind the this.setState. you'll get a typescript error.



  render() {
    return (
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
        {/* Found: {this.state.images.length} images */}
        {/* Note: you don't have to put strings in '' here. */}
        {/* passed the onSearchSubmit function to the onSubmit prop. This way in App.js you can use that function for fetch calls, I THINK. */}
        {/* NOTE: onSubmit could be diff. name b.c it's a prop. You have to use the specific names on form elements but not here. */}
      </div>
    )
  }
}

export default App;
