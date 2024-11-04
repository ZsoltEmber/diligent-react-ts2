import { useState } from 'react';
import { Todo } from '../TodoTable';
import { addTodo } from '../utility';

const useAddTodo = (todos: Todo[]) => {

    const initialNextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

    const [nextId, setNextId] = useState<number>(initialNextId);
    const [newTodo, setNewTodo] = useState<Todo>({
        id: nextId,
        description: '',
        isDone: false,
    });

    const handleClick = () => {
        if (newTodo.description.trim() === '') {
            alert('Cannot add empty task!');
            return;
        }
        addTodo(newTodo);

        setNextId((prevId: number) => prevId + 1);

        setNewTodo({
            id: nextId,
            description: '',
            isDone: false,
        });
    };

    const handleInputChange = (description: string) => {
        setNewTodo((prev : Todo) => ({ ...prev, description }));
    };

    return {
        newTodo,
        handleClick,
        handleInputChange,
    };
};

export default useAddTodo;