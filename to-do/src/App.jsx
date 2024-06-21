import React, { useState } from 'react';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const moveTaskUp = (index) => {
    if (index === 0) return;
    const newTasks = [...tasks];
    [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
    setTasks(newTasks);
  };

  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return;
    const newTasks = [...tasks];
    [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-sky-900 p-4 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-cyan-950">To Do List</h1>
        <div className="mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border py-2 px-4 w-full mb-2 rounded"
            placeholder="New task"
          />
          <button
            onClick={addTask}
            className="bg-emerald-500 text-white font-bold px-4 py-2 rounded w-full hover:bg-emerald-700 hover:scale-105 duration-300"
          >
            Add task
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center justify-between mb-2 border rounded py-2 px-4">
              <span>{task}</span>
              <div>
                <button
                  onClick={() => moveTaskUp(index)}
                  className="bg-gray-300 text-gray-700 p-1 rounded mr-2 hover:bg-gray-400 duration-300"
                >
                  <KeyboardArrowUpIcon />
                </button>
                <button
                  onClick={() => moveTaskDown(index)}
                  className="bg-gray-300 text-gray-700 p-1 rounded mr-2 hover:bg-gray-400 duration-300"
                >
                  <KeyboardArrowDownIcon />
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 text-white p-1 rounded hover:bg-red-600 duration-300"
                >
                  <DeleteOutlineIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;