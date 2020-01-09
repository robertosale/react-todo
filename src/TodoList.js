import React, { Component } from 'react';
import TodoItem from './TodoItem';


class TodoList extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />



            </div>
          );
    }
}
 
export default TodoList;