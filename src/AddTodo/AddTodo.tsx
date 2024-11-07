import useAddTodo from './useAddTodo';
import { Todo } from '../utility';

interface AddTodoProp {
    todos: Todo[];
    setTodos: Function;
}


const AddTodo = ({ todos, setTodos }: AddTodoProp) => {
    const { newTodo, handleClick, handleInputChange } = useAddTodo(todos, setTodos);

    return (
        <div className='add-todo-container'>
            <input
                type="text"
                value={newTodo.description}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder='Enter new task'
                maxLength={40}
            />
            <button onClick={handleClick}>Add Todo</button>
        </div>
    );
};

export default AddTodo;
