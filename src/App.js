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
        console.log('state ',this.state);
    }

    handleSubmit(event) {
        alert('A form was submitted: ' + this.state);
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
            <form className="testForm" onSubmit={this.handleSubmit}>
                <label>
                    Eye Color
                    <input className="testFormInput" name="eyeColor" type="text" onChange={this.handleChange} />
                </label>
                <label>
                    Skin Color
                    <input className="testFormInput" name="skinColor" type="text" onChange={this.handleChange} />
                </label>
                <label>
                    Hair Color
                    <input className="testFormInput" name="hairColor" type="text" onChange={this.handleChange} />
                </label>
                <label>
                    Face Ratio
                    <input className="testFormInput" name="faceRatio" type="text" onChange={this.handleChange} />
                </label>
                <label>
                    Forehead Size
                    <input className="testFormInput" name="foreheadSize" type="text" onChange={this.handleChange} />
                </label>
                <label>
                    Chin Size
                    <input className="testFormInput" name="chinSize" type="text" onChange={this.handleChange} />
                </label>
                <label>
                    Lip Size
                    <input className="testFormInput" name="lipSize" type="text" onChange={this.handleChange} />
                </label>
                <label>
                    Eye Height
                    <input className="testFormInput" name="eyeHeight" type="text" onChange={this.handleChange} />
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
