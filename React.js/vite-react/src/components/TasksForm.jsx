import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const TasksForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const {createTask} = useContext(TaskContext)

    const handlerSubmit = (e) => {
        e.preventDefault()
        
        createTask({
            title,
            description
        })
        setDescription('')
        setTitle('')
    }


  return (
   <form onSubmit={ handlerSubmit }>
        <input type="text" placeholder='Ingrese su tarea'  
            onChange={ (e)=> setTitle(e.target.value) }
            value={title}
            autoFocus
        />
        <textarea name="description" id="" cols="30" rows="10"
              onChange={ (e)=> setDescription(e.target.value) }
              value={description}
        >

        </textarea>
        <button>Guardar</button>
   </form>
  )
}

export default TasksForm
