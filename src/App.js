import React from "react";
import Overview from "./components/Overview";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      tasks: [],
      input: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.input],
      input: '',
    });
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Overview tasks={this.state.tasks}/>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="task"
            onChange={this.handleChange}
            value={this.state.input}
            ></input>
          <button type="submit">Add a Task</button>
        </form>
      </div>
    );
  }
}

export default App;
