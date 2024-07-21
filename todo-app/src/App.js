
import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    const addToDo = (text) => {
        const newToDo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newToDo]);
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteToDo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const getFilteredTodos = () => {
        if (filter === 'completed') {
            return todos.filter(todo => todo.completed);
        } else if (filter === 'incomplete') {
            return todos.filter(todo => !todo.completed);
        } else {
            return todos;
        }
    };

    return (
        <div className="app">
            <Header />
            <AddToDo addToDo={addToDo} />
            <div className="filters">
                <button 
                    className={`filter-button ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
                <button 
                    className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
                    onClick={() => setFilter('completed')}
                >
                    Completed
                </button>
                <button 
                    className={`filter-button ${filter === 'incomplete' ? 'active' : ''}`}
                    onClick={() => setFilter('incomplete')}
                >
                    Incomplete
                </button>
            </div>
            <ToDoList 
                todos={getFilteredTodos()} 
                toggleComplete={toggleComplete} 
                deleteToDo={deleteToDo} 
            />
        </div>
    );
};

export default App;
