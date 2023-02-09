import TaskCard from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function Tasks(){

    const {tasks} = useContext(TaskContext)

    // Validamos que halla datos en el estado
    if( tasks.length === 0 ) { return <h1>No hay tareas</h1> }
    
    return (
        <div>
            {
                tasks.map((task) => (
                    <TaskCard task={task}  />
                ))
            }    
        </div>
    )
}

export default Tasks