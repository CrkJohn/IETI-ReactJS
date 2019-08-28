import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component{
    constructor(props) {
        super(props);
    }   

    render() {
        const listTodo = this.props.todoList.map((td) =>
            <li>
                <Todo text={td.text}  priority = {td.priority}   dueDate = {td.dueDate}/>
            </li>
        );
        return (  
            <ul>{listTodo}</ul>
        );
    }


}