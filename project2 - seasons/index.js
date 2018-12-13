import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lat: null, errMessage: ''};
  }
//you could skip the constructor code block and just put state = {lat: null, errMessage: ''} b.c Babel implements the constructor fn for us.


componentDidMount() {
  window.navigator.geolocation.getCurrentPosition(
    position => this.setState({ lat: position.coords.latitude }),
    err => this.setState({ errMessage: err.message})
  ) //
}

renderContent() {
  if(this.state.errMessage && !this.state.lat) {
    return <div>Error: {this.state.errMessage}</div>
  }
  if(!this.state.errMessage && this.state.lat) {
      return<SeasonDisplay lat={this.state.lat}/> //SeasonDisplay's property lat has a value of this.state.lat. We are taking a property from state on the app componenet and passing it as prop down into the SeasonDisplay component.
      //Any time state gets updated the SeasonDisplay property does too.
  }
  return <Spinner message='Please accept the location request.'/>
}


  render() {
    return <div className='border'>{this.renderContent()}</div>
  }

}

ReactDOM.render(<App />, document.querySelector('#root'))
