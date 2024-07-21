import React from 'react';

const ToDoItem = ({ todo, toggleComplete, deleteToDo }) => {
    return (
        <li>
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.text}
            </span>
            <button onClick={() => deleteToDo(todo.id)}>Delete</button>
        </li>
    );
}

export default ToDoItem;