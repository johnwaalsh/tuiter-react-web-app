import TodoItem from "./todo-item";
import todos from "./todos.json";
const TodoList = () => {
    const q = [1, 2, 3, 4]
    return(
        <>
            <h3>Todo List</h3>
            <ul>
                {
                    todos.map(todo => {
                        return(<TodoItem todo={todo}/>);
                    })
                }
            </ul>
        </>
    );
}
export default TodoList;