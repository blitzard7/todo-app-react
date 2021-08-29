import { TextField, Button } from '@material-ui/core';
import React from 'react';

function TodoForm() {
    return (
        <div>
            <form className="todo_list_form">
                <TextField
                    required
                    name="addTodo"
                    label="Add Todo"
                    autoComplete="none"
                />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
}

export default TodoForm;
