import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TaskForm from "./components/TodoComponents/TodoForm";

const todoTasks = [
  {
    task: '',
    id: '',
    completed: false
  },
  
];

let currentId = 1;

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: todoTasks,
      task: '',
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addNewTask = e => {
    e.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        { task: this.state.task,
          id: currentId,
          completed: false,
         }
      ],
      
      task: ''
    })
    currentId++;
  }

  render() {
    return (
      <div className="App">
        <TodoList todoTasksList={this.state.todoList} />
        <TaskForm 
        
          addNewTask={this.addNewTask}
          handleChanges={this.handleChanges}
          task={this.state.task}
        />
      </div>
    );
  }
}

export default App;
