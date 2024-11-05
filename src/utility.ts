
export interface Todo {
    id: number;
    description: string;
    isDone: boolean;
}


export const getTodos = async (): Promise<Todo[]> => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        return JSON.parse(storedTodos);
    } else {
        const response = await fetch('/data.json');
        const todos = await response.json();
        localStorage.setItem('todos', JSON.stringify(todos));
        return todos;
    }
};

export const addTodo = async (newTodo: Todo) => {

    const todos = await getTodos();

    todos.push(newTodo);

    localStorage.setItem('todos', JSON.stringify(todos));
};

export const handleToggle = (todos: Todo[], id: number, setTodos: Function): void => {
    const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
);
localStorage.setItem('todos', JSON.stringify(updatedTodos));
setTodos(updatedTodos)
};
