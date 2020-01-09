import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>Todo React</p>
        <input type="text"/>
        <button>Guardar</button>
        <TodoList />
        
      </header>

      
    </div>
  );
}

export default App;
