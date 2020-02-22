import React from 'react';
import './App.css';

class App extends React.Component {

    render() {
        return (
            <div className="love-potion">
                <h1>Love Potion</h1>
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
                <label>Eye Color</label>
                <input className="testFormInput" type="text"/>
                <label>Skin Color</label>
                <input className="testFormInput" type="text"/>
                <label>Hair Color</label>
                <input className="testFormInput" type="text"/>
                <label>Face Height</label>
                <input className="testFormInput" type="text"/>
                <label>Face Width</label>
                <input className="testFormInput" type="text"/>
                <label>Forehead Size</label>
                <input className="testFormInput" type="text"/>
                <label>Chin Size</label>
                <input className="testFormInput" type="text"/>
                <label>Lip Size</label>
                <input className="testFormInput" type="text"/>
                <label>Eye Height</label>
                <input className="testFormInput" type="text"/>
                <button className="submit" type="submit">Submit</button>
            </form>
        </div>
        );
    }

    renderImageInput() {
      return(
        <div className="ImageInput">
          <input type="image" alt="imageInput"></input>
        </div>
      );
    }

}

export default App;
