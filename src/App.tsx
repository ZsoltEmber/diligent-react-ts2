import { useEffect, useState } from "react";
import TodoTable from "./TodoTable"
import { getTodos } from "./utility";
import { handleToggle, Todo } from "./utility";
import AddTodo from "./AddTodo/AddTodo";

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
            {todos && <div>
                <AddTodo todos={todos} setTodos={setTodos} />
                <TodoTable todos={todos} onToggle={handleToggle} setTodos={setTodos} />
            </div>
            }
        </>
    )
}

export default App