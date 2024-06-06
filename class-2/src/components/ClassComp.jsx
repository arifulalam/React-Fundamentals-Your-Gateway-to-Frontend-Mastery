/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {Component} from 'react'

class ClassComp extends Component { 
  constructor(props) {
      console.log(props);
      super(props);
      const {title, features} = props;
      this.title = title;
      this.list = [];

      for (const [key, value] of Object.entries(features)) {
        this.list.push(<li key={key}>{value}</li>);
      }

      this.state = { count: 0 };
    }

    increment = () => {
      this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
      this.setState({ count: this.state.count - 1 });
    }

    render() {
      return (
        <>
            <h2>{this.title}</h2>
            <ul>
            {this.list}
            </ul>

            <button onClick={this.increment}>Increment</button><br/>
            <span>{this.state.count}</span><br/>
            <button onClick={this.decrement}>Decrement</button>
        </>
      );
    }
  }

  export default ClassComp;