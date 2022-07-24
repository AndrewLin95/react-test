import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { 
        text: "",
        id: uniqid(),
      },
      tasks: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  // this takes the event (e) and changes the state of this.task to the value of the string
  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
      }
    });
  };

  // onSubmitTask. preventDefault prevents the refresh on form submit. this.setState.tasks adds the text to the tasks array. the task is reset to empty string
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid()
       },
    })
    console.log(this.state.tasks);
  }

  handleClick = (ID) => {
    let newTasks = this.state.tasks.filter((item) => item.id !== ID);
    this.setState({
      tasks: newTasks
    })
  }

  editTask = (ID) => {
    let newTasks = this.state.tasks.find((array) => array.id === ID);
    newTasks.text = 'hello';
    let currentTask = this.state.tasks;

    currentTask.splice(this.state.tasks.findIndex((array) => array.id === ID),1,newTasks)
    this.setState({
      tasks: currentTask
    })
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <input 
            onChange={this.handleChange}
            value={task.text}
            type='text' 
            id='taskInput'
            placeholder="Input something here"
          />
          <button type='submit'>Submit</button>
        </form>
        <Overview tasks={tasks} onClick={this.handleClick} editTask={this.editTask}/>
      </div>
    );
  }
}

export default App;

