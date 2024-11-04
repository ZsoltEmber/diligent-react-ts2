import { Todo } from './TodoTable';

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
