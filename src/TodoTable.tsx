import AddTodo from "./AddTodo/AddTodo";
import { Todo } from "./utility";

export interface TodoTableProps {
    todos: Todo[];
    onToggle: Function;
    setTodos: Function;
}

const TodoTable: React.FC<TodoTableProps> = ({ todos, onToggle, setTodos }) => {

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
                        <td> <input onChange={()=>onToggle(todos, todo.id, setTodos)} type={"checkbox"} checked={todo.isDone} ></input> </td>
                        <td> <button >Delete</button> </td>
                    </tr>
                )
            })}
            <tr>
                <AddTodo todos={todos}/>
            </tr>
        </tbody>
    </table>
}

export default TodoTable;

