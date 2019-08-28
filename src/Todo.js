import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
            <h2>{ "Text : " + this.props.text +" Priority : " + this.props.priority + " DueDate " + this.props.dueDate}</h2> 
        );
    }

}