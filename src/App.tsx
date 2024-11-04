import { useEffect, useState } from "react"
import TodoTable, { Todo } from "./TodoTable"
import { getTodos } from "./utility"


//TODO: delete dummy data


const App = () => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const fetchTodos = async () => {
        const allTodos = await getTodos();
        setTodos(allTodos);
    };

    useEffect(() => {
        fetchTodos();
    }, [todos]); 

    return <TodoTable todos={todos} />;
}

export default App