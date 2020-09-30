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
        <div className="col-6 mx-auto mt-5">
        <Overview tasks={this.state.tasks}/>
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="task"
              onChange={this.handleChange}
              value={this.state.input}
              className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Add a Task</button>
            </div>
          </form>
        </div>
    );
  }
}

export default App;
