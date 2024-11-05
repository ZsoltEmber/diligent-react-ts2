import TodoTable from "./TodoTable"
import { useFetch } from "./UseFetch";
import { handleToggle } from "./utility";


const App = () => {

    const todos = useFetch()

    return <TodoTable todos={todos} onToggle={handleToggle} />
}

export default App