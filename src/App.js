import React from 'react';
import './App.css';
import { InputForm } from 'Components/InputForm/InputFormClass';

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

export default App;
