import '../styles/Tasklist.css'
import {useEffect, useState} from 'react';


const Tasklist = () => {

    const [tasks, setTasks] = useState([]);
    const [curVal, setVal] = useState(null);
    const [tasksDisplay, setDisplay] = useState(null)

    function addTask() {
        let temp = [...tasks, curVal]
        setTasks(temp)
        console.log(tasks)
    }


    return(
        <>

        <div class='tasklist'>
        <div id="myDIV" class="header">
            <h2>Ivy Lee Section</h2>
            <input onChange={(e) => setVal(e.target.value)} placeholder="Title..."/>
            <button onClick={() => {addTask()}}>Add</button>
        </div>

        {tasksDisplay}
        </div>


        </>
        
    
    );
}

export default Tasklist;