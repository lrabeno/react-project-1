import { useState } from 'react';

export const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };

    /* When adding remember to spread all the elements
   in the array and then add the new element.  */

    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    /*
    This update function maps through the array,
    Then checks that it has the right id.
    When it does you take that certain task, but then change the completed to true.
    */
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div>
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="list">
        {todoList.map((task, idx) => {
          return (
            <div
              key={idx}
              className="task"
              style={{ backgroundColor: task.completed ? 'green' : 'red' }}
            >
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteTask(task.id)}>X</button>
              <button onClick={() => completeTask(task.id)}>Complete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
