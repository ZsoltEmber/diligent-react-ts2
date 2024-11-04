import { addTodo } from "./utility";
import AddTodo from "./AddTodo/AddTodo";

export interface Todo {
    id: number,
    description: string;
    isDone: boolean
}

export interface TodoTableProps {
    todos: Todo[];
}

const TodoTable: React.FC<TodoTableProps> = ({ todos }) => {

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
                    <tr key={todo.description}>
                        <td>{todo.description}</td>
                        <td> <input type={"checkbox"}></input> </td>
                    </tr>
                )
            })}
            <tr>
                <AddTodo todos={todos} />
            </tr>
        </tbody>
    </table>
}


export default TodoTable

