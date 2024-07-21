import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, toggleComplete, deleteToDo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteToDo={deleteToDo}
                />
            ))}
        </ul>
    );
}

export default ToDoList;

