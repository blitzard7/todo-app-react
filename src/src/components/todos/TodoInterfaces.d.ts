export interface TodoItem {
    name: string;
    isActive: boolean;
}

export interface ITodoListProps {
    todoItems: TodoItem[];
    onRemoveTodo: (item: TodoItem) => void;
}

export interface ITodoFormProps {
    onAddTodo: (item: string) => void;
}
