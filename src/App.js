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

    constructor(props) {
        super(props);
        this.state = {
            'Eye Color': '',
            'Skin Color': '',
            'Hair Color': '',
            'Face Ratio': '',
            'Forehead Size': '',
            'Chin Size': '',
            'Lip Size': '',
            'Eye Height': ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert('A form was submitted: ' + this.state.value);
        event.preventDefault();
    }

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
                <label>
                    Eye Color
                    <input className="testFormInput" name="EyeColor" type="text"/>
                </label>
                <label>
                    Skin Color
                    <input className="testFormInput" type="text"/>
                </label>
                <label>
                    Hair Color
                    <input className="testFormInput" type="text"/>
                </label>
                <label>
                    Face Ratio
                    <input className="testFormInput" type="text"/>
                </label>
                <label>
                    Forehead Size
                    <input className="testFormInput" type="text"/>
                </label>
                <label>
                    Chin Size
                    <input className="testFormInput" type="text"/>
                </label>
                <label>
                    Lip Size
                    <input className="testFormInput" type="text"/>
                </label>
                <label>
                    Eye Height
                    <input className="testFormInput" type="text"/>
                </label>
                <input className="submit" type="submit" value="Submit"/>
            </form>
        </div>
        );
    }

    renderImageInput() {







      return(
        <div className="ImageInput">
          <input type='file' />
          <button>Upload</button>
        </div>
      );
    }

}

export default App;
