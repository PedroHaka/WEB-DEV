import React, { useState } from "react";
import './AddTask.css';
import Button from './Button.jsx'

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
    }

    return (
        <div className="add-task-container">
            <input 
                onChange={handleInputChange} 
                value={inputData}
                className="add-task-input" 
                type="text" 
            />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick} placeholder="digite aqui">Adicionar</Button>
            </div>
        </div>
    );
        
}
export default AddTask;