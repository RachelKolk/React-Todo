import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TaskForm from "./components/TodoComponents/TodoForm";

import "./components/TodoComponents/Todo.css";

const todoList = [
  {
    task: 'Wash Dishes',
    id: '1',
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
      todoList: todoList,
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

  toggleCompleted = index => {
    console.log("Click!");
    this.setState({
        todoList: this.state.todoList.map((todo, listrank) => {
         
          if (index !== listrank) {
            return todo;
          } else {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
        })
    });
  }

  clearCompleted = e => {
    
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(
        todo => todo.completed === false
      )
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My To Do List :</h1>
        <TodoList 
          toggleCompleted={this.toggleCompleted}
          todoTasksList={this.state.todoList}
        />
        <TaskForm 
        
          addNewTask={this.addNewTask}
          handleChanges={this.handleChanges}
          task={this.state.task}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
