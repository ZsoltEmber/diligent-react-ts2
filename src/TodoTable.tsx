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
            </tr>

        </thead>
        <tbody>
            {todos.map((todo) => {
                return (
                    <tr key={todo.id}>
                        <td>
                        <span onClick={() => onToggle(todos, todo.id, setTodos)}  className={todo.isDone ? 'todo-text done' : 'todo-text'}>{todo.description}</span>
                        <button className="delete" >X</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    )
}

export default TodoTable;

