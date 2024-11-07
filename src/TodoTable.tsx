import { Todo, deleteTodo } from "./utility";

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
                        <button onClick={()=> deleteTodo(todos, todo.id, setTodos)} className="delete" >X</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    )
}

export default TodoTable;

