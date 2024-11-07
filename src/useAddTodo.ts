import { useState } from 'react';
import { addTodo, Todo, calculateNextId } from './utility';

const useAddTodo = (todos: Todo[], setTodos: Function) => {

    const [newTodo, setNewTodo] = useState<Todo>({
        id: calculateNextId(todos),
        description: '',
        isDone: false,
    });

    const handleClick = () => {
        if (newTodo.description.trim() === '') {
            alert('Cannot add empty task!');
            return;
        }

        addTodo(newTodo, setTodos);

        setNewTodo({
            id: calculateNextId(todos) + 1,
            description: '',
            isDone: false,
        });
    };

    const handleInputChange = (description: string) => {
        setNewTodo((prev: Todo) => ({ ...prev, description }));
    };

    return {
        newTodo,
        handleClick,
        handleInputChange,
    };
};

export default useAddTodo;