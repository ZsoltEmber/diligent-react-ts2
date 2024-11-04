import { useEffect, useState } from "react";
import TodoTable from "./TodoTable"
import { Todo } from "./UseFetch";
import { getTodos } from "./utility";


const App = () => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const fetchTodos = async () => {
        const allTodos = await getTodos();
        setTodos(allTodos);
    };
    useEffect(() => {
        fetchTodos();
    }, [todos]);

    return <TodoTable todos={todos} />
}

export default App