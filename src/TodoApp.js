import React from 'react';
import {TodoList} from './TodoList'
import { tsImportEqualsDeclaration } from '@babel/types';


class TodoApp extends React.Component {
    constructor(props) {
      super(props);     
      this.state = { todoList: [], text: '' , priority  : 0 , dueDate : new Date()};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList todoList={this.state.todoList} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input
              type="text"
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />

            <input
              type = "number"
              id="new-priority"
              onChange={this.handleChange}
              value={this.state.priority}
            />

            
            <input
              type ="date"
              id="new-dueDate"
              onChange={this.handleChange}
              value={this.state.dueDate}
            />

          
            <button>
                {this.state.todoList.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text:document.getElementById('new-todo').value });
      this.setState({ priority: document.getElementById('new-priority').value });
      this.setState({ dueDate: document.getElementById('new-dueDate').value
     });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        dueDate : this.state.dueDate,
        priority : this.state.priority,
        id: Date.now()
      };
      this.setState(prevState => ({
        todoList: prevState.todoList.concat(newItem),
        text: ''
      }));
    }
  }


  export default TodoApp;
