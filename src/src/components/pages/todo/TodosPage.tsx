import React, { useState } from 'react';
import { mockedItems } from '../../../data/mockedTodos';
import TodoForm from '../../todos/TodoForm';
import { TodoItem } from '../../todos/TodoInterfaces';
import TodoList from '../../todos/TodoList';
import '../../todos/Todos.css';

function TodosPage() {
    const [todoItems, setTodoItems] = useState<TodoItem[]>(mockedItems);

    const handleAddTodo = (item: string) => {
        const todoItem: TodoItem = {
            name: item,
            isActive: true,
        };

        setTodoItems((prevState) => [...prevState, todoItem]);
    };

    return (
        <div className="todos_container">
            <TodoForm onAddTodo={handleAddTodo} />
            <TodoList todoItems={todoItems} />
        </div>
    );
}

export default TodosPage;
