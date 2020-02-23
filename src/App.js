import React from 'react';
import './App.css';
import { InputForm } from './Components/InputForm/InputFormClass';

class App extends React.Component {

    render() {
        return (
            <div className="love-potion">
                <div className="titleHeader">
                    <h1>Love Potion</h1>
                </div>
              <InputForm />
            </div>
        );
    }
}

export default App;
