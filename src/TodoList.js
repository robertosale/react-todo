import React, { Component } from 'react';
import TodoItem from './TodoItem';


class TodoList extends Component {
    state = {
        tasks: ['ir de compras','hacer dieta']
      }
    render() { 
        const {task} = this.state.tasks;
        return (
            <div>
                {

                    this.state.tasks.map(
                        task => {
                            return <TodoItem task={task}/>
                        }
                    )

                }



            </div>
          );
    }
}
 
export default TodoList;