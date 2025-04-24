import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  completedTodos,
  incompletedTodos,
  onCompleteClicked,
  onDeleteClicked,
  onCreateClicked,
}) => {
  return (
    <div>
      <h1>My Todo</h1>
      <NewTodoForm onCreateClicked={onCreateClicked} />
      <div> new todo form will go here</div>
      <h3>completed</h3>

      {completedTodos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          onDeleteClicked={onDeleteClicked}
        />
      ))}

      <h3>imcompleted</h3>

      {incompletedTodos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          onCompleteClicked={onCompleteClicked}
        />
      ))}
    </div>
  );
};

export default TodoList;
