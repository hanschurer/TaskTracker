import React from 'react'

const Button = ({color,text,onClick}) => {

    

    return (
        <div>
            <button onClick={onClick} className='btn' style={{backgroundColor:color}}>{text}</button>
        </div>
    )
}

Button.defaultProps={
    color: 'black',
    text: 'Add'
}

export default Button
