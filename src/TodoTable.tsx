import { Todo } from "./utility";

export interface TodoTableProps {
    todos: Todo[];
    onToggle: Function;
    setTodos: Function;
}

const TodoTable: React.FC<TodoTableProps> = ({ todos, onToggle, setTodos }) => {

    return (
    <table>
        <thead>
            <tr>
                <th>Tasks</th>
                <th>Done</th>
                <th></th>
            </tr>

        </thead>
        <tbody>
            {todos.map((todo) => {
                return (
                    <tr key={todo.id}  className={todo.isDone ? 'todo-item done' : 'todo-item'}>
                        <td  className={todo.isDone ? 'todo-text done' : 'todo-text'}>{todo.description}</td>
                        <td> <input onChange={() => onToggle(todos, todo.id, setTodos)} type={"checkbox"} checked={todo.isDone} ></input> </td>
                        <td> <button >Delete</button> </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    )
}

export default TodoTable;

