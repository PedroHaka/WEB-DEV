import React, { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks.jsx'
import AddTask from './components/AddTask.jsx';

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar Javascript',
      completed: false,
    },
    {
      id: 2,
      title: 'Estudar REACT',
      completed: false,
    }]
  );

  const handleTaskAddition = taskTitle => {
    const newTasks = [ ...tasks, 
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false
      }
    ];
    setTasks(newTasks);
  }


  return (
    <>
      <div className='container'>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} />
      </div>
    </>
  );
  


  
  
}

export default App;
