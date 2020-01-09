import React, { Component } from 'react';



class TodoItem extends Component {
    state = {  }
    render() { 
        return (
            <p>{this.props.task}</p>
          );
    }
}
 
export default TodoItem;