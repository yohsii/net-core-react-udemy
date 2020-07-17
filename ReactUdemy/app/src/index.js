//import react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

//create react component
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: "" };

    }

    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition((position) => {
            this.setState({ lat: position.coords.latitude });
            console.log(position);
        }, err => {
            this.setState({ errorMessage: err.message });
            console.log(err)
        });
    }

    componentDidUpdate() {
        console.log("my component was just updated, it re-rendered");
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Loading message="Please accept location request" />;
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}
    //take react component and show it on screen
ReactDOM.render(<App />, document.querySelector("#root"));