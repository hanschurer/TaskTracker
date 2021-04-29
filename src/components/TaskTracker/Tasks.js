import Task from './Task'



const Tasks = ({tasks,onDelete,onToggle}) => {


    return (
        <>
            {tasks.map((task)=>(<Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete}></Task>))}
        </>
    )
}

export default Tasks
