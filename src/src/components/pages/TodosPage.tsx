import React from 'react';
import TodoForm from '../todos/TodoForm';
import TodoList from '../todos/TodoList';
import '../todos/Todos.css';

function TodosPage() {
    return (
        <div className="todos_container">
            <TodoForm />
            <TodoList />
        </div>
    );
}

export default TodosPage;
