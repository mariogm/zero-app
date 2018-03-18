import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Input } from './Input';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        };

        this.changeText = this.changeText.bind(this);
    }

    changeText(newText) {
        this.setState({
            name: newText
        });
    }

    render() {
        return(
            <div>
            <Input onChange={this.changeText}/>
            <h1>Hello {this.state.name}</h1>
            </div>
        );
    }
}

/*
const HelloWorld = (props) => {
    return(
        <h1>Hello {props.name}</h1>
    );
}*/

ReactDOM.render(<HelloWorld />, document.getElementById('root'));