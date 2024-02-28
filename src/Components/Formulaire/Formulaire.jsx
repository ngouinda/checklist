import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';

// import '../Formulaire/Formulaire.css';


const Formulaire = ({modal, toggle, save}) => {

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

    const handelSave = () =>{
        let taskObj ={}
        taskObj["Name"] = taskName;
        taskObj["Description"]= description;
        save(taskObj);
        
    }
    return (
        <div>
        <Modal className='form'  isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Add a new task</ModalHeader>
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
          <Button color="primary" onClick={handelSave}>
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </div>
    );
};

export default Formulaire;