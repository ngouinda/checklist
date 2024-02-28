import { useState } from 'react';
import Formulaire from '../Formulaire/Formulaire';
import './Checklist.css';
import Card from '../Card/Card';


const Checklist = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTasklist] = useState([])

    //delete  founction

    const deleteTask =(index) =>{
        let tempList = taskList
        tempList.splice(index, 1)
        setTasklist(tempList)
         window.location.reload()
    }

        //
    const updateListArray = (Obj, index) =>{
        let tempList = taskList
        tempList [index] = Obj
        setTasklist(tempList)
        window.location.reload()
    }

    const toggle=() =>{
        setModal(!modal);
    }


    const saveTask =(taskObj) =>{
        let tempList= taskList;
        tempList.push(taskObj);
        setTasklist(tempList);
        setModal(false);
    }
    return (
        <>
          <div className='header text-center'>
            
            <h3>Check List</h3>
                <button className="btn btn-info mt-2" onClick={() =>setModal(true)}>
                    Create a news list
                </button>
          </div>
          <div className="task-container">
            {taskList.map((Obj, index) => <Card taskObj = {Obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
          </div>
          <Formulaire toggle={toggle} modal={modal} save ={saveTask}/> 
        </>
    );
};

export default Checklist;