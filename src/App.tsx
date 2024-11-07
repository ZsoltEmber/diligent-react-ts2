import { useEffect, useState } from "react";
import TodoTable from "./component/TodoTable"
import { getTodos } from "./utility";
import { handleToggle, Todo } from "./utility";
import AddTodo from "./component/AddTodo";

const App = () => {

    const [todos, setTodos] = useState<Todo[] | undefined>();

    const fetchTodos = async () => {
        const allTodos = await getTodos();
        setTodos(allTodos);
    };

    useEffect(() => {
        fetchTodos();
    }, []);


    return (
        <>
        <h1>TODO</h1>
            {todos && <div className="main-container">
                <AddTodo todos={todos} setTodos={setTodos} />
                <TodoTable todos={todos} onToggle={handleToggle} setTodos={setTodos} />
            </div>
            }
        </>
    )
}

export default App