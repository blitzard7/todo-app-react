export interface TodoItem {
    name: string;
    isActive: boolean;
}

export interface ITodoListProps {
    todoItems: TodoItem[];
}

export interface ITodoFormProps {
    onAddTodo: (item: string) => void;
}
