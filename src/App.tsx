import { useEffect, useState } from "react";
import TodoTable from "./TodoTable"
import { getTodos } from "./utility";
import { handleToggle, Todo } from "./utility";

const App = () => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const fetchTodos = async () => {
        const allTodos = await getTodos();
        setTodos(allTodos);
    };

    useEffect(() => {
        fetchTodos();
    }, []);


    return (
        <>
        {todos && <TodoTable todos={todos} onToggle={handleToggle} setTodos={setTodos} />}
        </>
    )
}

export default App