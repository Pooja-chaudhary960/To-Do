import React, { useState } from 'react';

const TaskForm =({ addTask })=> {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    const newTask = {
      id: Date.now(),       // unique ID
      text: text,
      dueDate: dueDate,
      completed: false
    };

    addTask(newTask);       // pass task to App
    setText("");            // clear input
    setDueDate("");         // clear date
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
