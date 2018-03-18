import React from 'react';

export class Input extends React.Component {

    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let name = e.target.value;
        this.props.onChange(name);
    }

    render() {
        return(
            <input type="text" onChange={this.handleChange}/>
        );
    }
}