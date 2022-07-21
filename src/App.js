import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';//to import easily ctrl space tab


function App() {
  return (
    <div className="Todo-app">
      <TodoList />
    </div>
  );
}

export default App;
