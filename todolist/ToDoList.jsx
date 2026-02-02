import React, {useState} from 'react';

function ToDoList(){
    const [tasks, setTasks] = useState(["a", "b"]);
    const [newTask, setNewTask] = useState("");

    function handleChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => 
        i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatesTasks = [...tasks];
            [[updatesTasks[index - 1], updatesTasks[index]] = [updatesTasks[index], updatesTasks[index - 1]]];
            setTasks(updatesTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatesTasks = [...tasks];
            [[updatesTasks[index + 1], updatesTasks[index]] = [updatesTasks[index], updatesTasks[index + 1]]];
            setTasks(updatesTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" value={newTask} onChange={handleChange} placeholder="Enter a new task..."/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button className="up-button" onClick={() => moveTaskUp(index)}>
                        Up
                    </button>
                    <button className="down-button" onClick={() => moveTaskDown(index)}>
                        Down
                    </button>
                </li>)}
            </ol>
        </div>
    )
}

export default ToDoList;