import { Todo } from "./UseFetch";

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
import { Todo } from "./UseFetch";

export const handleToggle = (todos: Todo[], id: number): Todo[] => {
    return todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
};
