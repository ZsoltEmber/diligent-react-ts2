import { Todo } from "./UseFetch";

export const handleToggle = (todos: Todo[], id: number): Todo[] => {
    return todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
};
