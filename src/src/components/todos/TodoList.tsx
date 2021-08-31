import { ITodoListProps } from './TodoInterfaces';
import './Todos.css';

function TodoList(props: ITodoListProps) {
    const { todoItems } = props;
    return (
        <div className="todo_list_container">
            <ul className="todo_list_ul">
                {todoItems.map((x, i) => {
                    return <li key={i}>{x.name}</li>;
                })}
            </ul>
        </div>
    );
}

export default TodoList;
