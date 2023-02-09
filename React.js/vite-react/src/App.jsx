import { useState, useEffect } from 'react'
import Tasks  from './components/Tasks'
import TasksForm from './components/TasksForm'

const App = () => {
  return (<>
    < TasksForm  />
    < Tasks />
  </>)
}

export default App
