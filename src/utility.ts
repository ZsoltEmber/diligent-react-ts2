
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

export const addTodo = async (newTodo: Todo, setTodos: Function) => {
    const todos = await getTodos();
    todos.push(newTodo);
    setTodos(todos)
    localStorage.setItem('todos', JSON.stringify(todos));
};

export const handleToggle = (todos: Todo[], id: number, setTodos: Function): void => {
    const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos)
};


export const calculateNextId = (todos: Todo[]) => {
    if (todos.length == 0) {
        return 1;
    }
    const ids: number[] = [];
    todos.forEach(todo => {
        ids.push(todo.id)
    });
    const maxId: number = Math.max(...ids)
    console.log(maxId)
    return maxId + 1;
};
