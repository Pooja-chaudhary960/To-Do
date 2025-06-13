import React, { useState } from 'react';

const TaskItem =({ task, updateTask, deleteTask })=> {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);

  const toggleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  const handleSave = () => {
    updateTask({ ...task, text: editedText, dueDate: editedDueDate });
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleComplete}
        />
        {isEditing ? (
          <input 
            type="text" 
            value={editedText} 
            onChange={(e) => setEditedText(e.target.value)} 
          />
        ) : (
          <span>{task.text}</span>
        )} &nbsp;
        {isEditing ? (
          <input
            type="date"
            value={editedDueDate}
            onChange={(e) => setEditedDueDate(e.target.value)}
          />
        ) : (
          <small>Due: {task.dueDate}</small>
        )}
      </label>

      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
