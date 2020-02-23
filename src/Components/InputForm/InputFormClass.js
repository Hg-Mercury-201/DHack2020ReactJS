import React from "react";
const axios = require("axios");


export class InputForm extends React.Component {

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
            'Eye Height': '',
            file:null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onFormSubmit(e){
      e.preventDefault();
      const formData = new FormData();
      formData.append('myImage',this.state.file);
      const config = {
        headers: {
          'content-type':'multipart/form-data'
        }
      };
      axios.post("/upload",formData,config)
        .then((response) => {
          alert("The file is successfully uploaded");
        }).catch((error) =>{
      });
    }
    onChange(e){
      this.setState({file:e.target.files[0]});
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
        <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type='file' name='submitImage' onChange={this.onChange} />
        <button type='submit'>Upload</button>
        </form>

        </div>
      );
    }

}
