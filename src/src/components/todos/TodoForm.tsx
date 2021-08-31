import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { ITodoFormProps } from './TodoInterfaces';

function TodoForm(props: ITodoFormProps) {
    const { onAddTodo } = props;
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="todo_list_form">
            <TextField
                required
                name="addTodo"
                label="Add Todo"
                autoComplete="none"
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button type="button" onClick={() => onAddTodo(inputValue)}>
                Submit
            </Button>
        </div>
    );
}

export default TodoForm;
