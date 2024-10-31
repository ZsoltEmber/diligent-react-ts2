
export interface Todo {
    task: string;
    isDone: boolean
}


interface TodoTableProps {
    todos: Todo[];
}

const TodoTable: React.FC<TodoTableProps> = ({todos}) => {

    return <table>
        <thead>
            <tr>
                <th>Task</th>
                <th>Done</th>
            </tr>

        </thead>
        <tbody>
            {todos.map((todo)=> {return(
                <tr key={todo.task}>
                    <td>{todo.task}</td>
                    <td> <input type={"checkbox"}></input> </td>
                    <td> <button>Delete</button> </td>
                </tr>
            )})}
        </tbody>
    </table>
}


export default TodoTable

