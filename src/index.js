import React from "react";
import ReactDOM from "react-dom";
// import SeasonDisplay from "./SeasonDisplay";



class App extends React.Component {
    // Constructor function is always called on app load,
    // use this to set initial state
    constructor(props) {
        super(props);

        // This is the ONLY time we do direct assignment to this.state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            // we called setState !! :)
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    // React says we have to define render!!
    render() {
      if (this.state.errorMessage && !this.state.lat) {
          return <div>Error: {this.state.errorMessage}</div>
      }

      if (!this.state.errorMessage && this.state.lat) {
          return <div>Latitude: {this.state.lat}</div>
      }

      return <div>Loading...</div>

    }
}


ReactDOM.render(<App />, document.querySelector('#root')
);

