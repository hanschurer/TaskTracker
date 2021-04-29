import React from 'react'
import Button from './Button'

const Header = ({ title }) => {
    const onClick=()=>{
        console.log('FUck')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
             <Button color='black' text='Add' onClick={onClick}></Button>
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
