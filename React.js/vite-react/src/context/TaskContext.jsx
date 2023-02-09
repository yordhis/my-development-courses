import { createContext, useState, useEffect } from "react";
import { tasksList as data } from '../data/tasksList'

export const TaskContext = createContext()

export const TaskContextProvider = (props) => {

    const [tasks, setTasks] = useState([])

    useEffect(()=>{ setTasks(data) }, [])

    const createTask = (task) => {
      setTasks([...tasks, {
        id: tasks.length,
        title: task.title,
        description: task.description

      }])
    }

    const deleteTask = (taskId) => {
      setTasks(tasks.filter(task => task.id !== taskId))
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask

        }}> { props.children } </TaskContext.Provider>
    )
}