import React, { Component } from 'react';

const Item = ({ task, toggleDone, remove }) => {
  const style = {
    textDecoration: task.done ? 'line-through' : ''
  };
  return (
    <li style={style}>
      {task.text}
      <button onClick={toggleDone}>{task.done ? 'Undone' : 'Done'}</button>
      <button onClick={remove}>Remove</button>
    </li>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: "",
      tasks: [
        {
          text: "Task1",
          done: false
        },
        {
          text: "Task2",
          done: true
        }
      ]
    };
  }

  newTaskChangeHandler = event => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = () => {
    this.setState(currentState => ({
      tasks: [
        ...currentState.tasks,
        {
          text: currentState.newTodo,
          done: false
        }
      ],
      newTodo: ''
    }));
  };

  toggleDone = index => {
    this.setState(currentState => ({
      tasks: currentState.tasks.map((task, i) => ({
        ...task,
        done: i === index ? !task.done : task.done
      }))
    }));
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <input type="text" name="newTodo" value={this.state.newTodo} onChange={this.newTaskChangeHandler} />
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {this.state.tasks.map((task, index) => (
            <Item key={index.toString()}
              task={task}
              toggleDone={() => this.toggleDone(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
