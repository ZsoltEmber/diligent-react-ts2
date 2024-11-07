import useAddTodo from '../useAddTodo';
import { Todo } from '../utility';

interface AddTodoProp {
    todos: Todo[];
    setTodos: Function;
}


const AddTodo = ({ todos, setTodos }: AddTodoProp) => {
    const { newTodo, handleClick, handleInputChange } = useAddTodo(todos, setTodos);

    return (
        <div className='add-todo-container'>
            <form>
            <input
                type="text"
                value={newTodo.description}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder='Enter new task'
            />
            <button onClick={(event)=>handleClick(event)}>Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodo;
