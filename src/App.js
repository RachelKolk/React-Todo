import React from 'react';

const todoTasks = [
  {
    task: 'Write Thank Yous',
    id: 1,
    completed: false
  },
  {
    task: 'Laundry',
    id: 2,
    completed: false
  },
  {
    task: 'Clean Living Room',
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
