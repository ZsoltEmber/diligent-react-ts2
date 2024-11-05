import { Todo } from "./UseFetch";

interface TodoTableProps {
    todos: Todo[];
    onToggle: Function;
}

const TodoTable: React.FC<TodoTableProps> = ({ todos, onToggle }) => {

    return <table>
        <thead>
            <tr>
                <th>Task</th>
                <th>Done</th>
            </tr>

        </thead>
        <tbody>
            {todos.map((todo) => {
                return (
                    <tr key={todo.id}>
                        <td>{todo.description}</td>
                        <td> <input onChange={onToggle(todo.id)} type={"checkbox"} checked={todo.isDone} ></input> </td>
                        <td> <button >Delete</button> </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
}

export default TodoTable;

