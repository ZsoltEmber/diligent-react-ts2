import useAddTodo from './useAddTodo';
import { TodoTableProps } from '../TodoTable';



const AddTodo = ({ todos }: TodoTableProps) => {
    const { newTodo, handleClick, handleInputChange } = useAddTodo(todos);

    return (
        <td>
            <input
                type="text"
                value={newTodo.description}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder='Enter new task'
            />
            <button onClick={handleClick}>Add Todo</button>
        </td>
    );
};

export default AddTodo;
