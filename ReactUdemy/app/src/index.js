//import react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

//create react component
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null,errorMessage:"" };

        window.navigator.geolocation.getCurrentPosition((position) => {
            this.setState({ lat: position.coords.latitude });
            console.log(position);
        }, err => {
            this.setState({ errorMessage:err.message });
            console.log(err)
        });
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (this.state.lat && !this.state.errorMessage) {
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Loading...</div>;

    }

}

//take react component and show it on screen
ReactDOM.render(<App />, document.querySelector("#root"));