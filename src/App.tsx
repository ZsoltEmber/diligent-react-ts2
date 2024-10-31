import TodoTable from "./TodoTable"
import { useFetch } from "./UseFetch";


const App = () => {

    const todos = useFetch()

    return <TodoTable todos={todos} />
}

export default App