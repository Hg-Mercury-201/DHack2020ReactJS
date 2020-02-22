import React from 'react';
import './App.css';

class App extends React.Component {

    render() {
        return (
            <div className="love-potion">
                <p className="test">Hello World</p>
            </div>
        );
    }
}

class InputForm extends React.Component {

    render() {
        return(
        <div className="InputForm">

        </div>
        );
    }

    renderTextForm() {
        return(
        <div className="textForm">
            <form className="testForm">
                <input type="text" />
            </form>
        </div>
        );
    }

    renderImageInput() {

    }

}

export default App;
