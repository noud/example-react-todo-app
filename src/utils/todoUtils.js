export const getLastId = (todoList: Array) => {
  let lastId = 0;
  todoList.map((todo) => lastId = (todo.id > lastId ? todo.id : lastId));

  return lastId;
}