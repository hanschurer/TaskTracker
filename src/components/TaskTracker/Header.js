import React from 'react'
import Button from './Button'

const Header = ({ title,onAdd,showAdd }) => {


    return (
        <header className='header'>
            <h1>{title}</h1>
             <Button color={showAdd?'red':'green'} text={showAdd?'Close':'Add'} onClick={()=>onAdd() }></Button>
        </header>
    )
}
//set the default props
Header.defaultProps={
    title: 'Task Tracker',
}

const headingStyle={
    
}

export default Header
