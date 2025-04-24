const TodoListItem = ({ todo, onCompleteClicked, onDeleteClicked }) => {
  return (
    <>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>completed!</p>}
      <div>
        {todo.isCompleted ? (
          <button onClick={() => onDeleteClicked(todo.text)}>
            Delete Item
          </button>
        ) : (
          <button onClick={() => onCompleteClicked(todo.text)}>
            Mark as Completed
          </button>
        )}
      </div>
    </>
  );
};

export default TodoListItem;
