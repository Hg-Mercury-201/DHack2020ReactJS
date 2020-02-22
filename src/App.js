import React from 'react';
import './App.css';

class App extends React.Component {

    render() {
        return (
            <div className="love-potion">
              <p className="test">Hello World</p>
              <InputForm />
            </div>
        );
    }
}

class InputForm extends React.Component {

    render() {
        return(
          <div className="InputForm">
            {this.renderTextForm()}
            {this.renderImageInput()}
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
      return(
        <div className="ImageInput">
          <input type="image"></input>
        </div>
      );
    }

}

export default App;
