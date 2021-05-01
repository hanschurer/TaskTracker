import {useState,useEffect} from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'
import firebase from '../../firebase'
import {v4 as uuidv4} from 'uuid'


const TaskTracker = () => {

    const [showAddTask, setShowAddTask]= useState(false)

    const ref = firebase.firestore().collection('Tasks');

    useEffect(()=>{
        getTasks();
    },[])

    const getTasks=()=>{
        ref.onSnapshot((querySnapshot)=>{
            const items=[];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            });
            setTasks(items)
        })
    }
    

    const [tasks,setTasks]=useState([
    ])

    const addTask=(task)=>{
        const id = uuidv4()
        const newTask = {id,...task}

        ref.doc(id).set(newTask).catch((err)=>{console.error(err)})
        //setTasks([...tasks, newTask])
    }

    const deleteTask=(id)=>{
        ref.doc(id).delete().catch((err)=>{console.log(err)})
        //setTasks(tasks.filter((task)=>(task.id!==id)))
    }

    const reminder=(task)=>{
        const id = task.id
        setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder}: task))

        ref.doc(task.id).update({
            reminder: task.reminder
        })

        
    }

    return (
        <div>
            <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
            {showAddTask&&<AddTask onAdd={addTask} />}  
            {tasks.length>0?<Tasks tasks={tasks} onToggle={reminder} onDelete={deleteTask}/>: 'No Tasks To Show'}
            
        </div>
    )
}

export default TaskTracker
