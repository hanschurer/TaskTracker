import {useState} from 'react'
import Header from './Header'
import Tasks from './Tasks'

const TaskTracker = () => {
    const [tasks,setTasks]=useState([
        {
            id:1,
            text: 'Meet at school',
            day: 'Feb 5th at 2:30pm',
            reminder: true
    
        },
        {
            id:2,
            text: 'go study',
            day: 'Feb 5th at 2:30pm',
            reminder: true
    
        },
        {
            id:3,
            text: 'go NHS for doctor',
            day: 'Feb 5th at 2:30pm',
            reminder: false
    
        },
    ])

    const deleteTask=(id)=>{
        setTasks(tasks.filter((task)=>(task.id!==id)))
    }

    const reminder=(id)=>{
        setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder}: task))
    }

    return (
        <div>
            <Header />

            {tasks.length>0?<Tasks tasks={tasks} onToggle={reminder} onDelete={deleteTask}/>: 'No Tasks To Show'}
            
        </div>
    )
}

export default TaskTracker
