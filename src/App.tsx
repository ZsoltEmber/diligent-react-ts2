import TodoTable, { Todo } from "./TodoTable"


//TODO: delete dummy data
const todos: Todo[]= [
    {task: "task1", isDone: true},
    {task: "task1", isDone: false},
    {task: "task1", isDone: false},
]

const App = () => {
    return <TodoTable todos={todos}/>
}

export default App