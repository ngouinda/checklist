import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';


const EditTask = ({modal, toggle, updateTask, taskObj}) => {

    const [taskName, setTaskName] =useState('');
    const [description , setDescription] = useState('');

    const  handelChange =(e) =>{
    
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value);
        }else{
            setDescription(value);
        }

    }

    useEffect(() =>{
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    }, [])

    const handelUpdate = (e) =>{
      e.preventDefault();
      let tempObj = {}
      tempObj['Name'] = taskName
      tempObj['Description'] = description
      updateTask(tempObj)
        
    }
    return (
        <div>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit task</ModalHeader>
        <ModalBody>
            <form className='formulaire' action="">
                <div className='form-group'>
                    <label>Task name</label>
                    <input type="text" className='form-control'name="taskName" value={taskName} onChange={handelChange}/>
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea rows ="6" className='form-control' name="description" value={description} onChange={handelChange}></textarea>     
                </div>
            </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handelUpdate}>
            Edit
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </div>
    );
};

export default EditTask;