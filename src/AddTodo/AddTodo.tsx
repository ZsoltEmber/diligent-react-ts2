import useAddTodo from './useAddTodo';
import { Todo } from '../utility';

interface AddTodoProp {
    todos: Todo[];
}


const AddTodo = ({ todos }: AddTodoProp) => {
    const { newTodo, handleClick, handleInputChange } = useAddTodo(todos);

    return (
        <div>
            <input
                type="text"
                value={newTodo.description}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder='Enter new task'
            />
            <button onClick={handleClick}>Add Todo</button>
        </div>
    );
};

export default AddTodo;
