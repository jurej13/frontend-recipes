import React from 'react'

export const ToggleButton = ({toggle,setToggle}) => {
    console.log(toggle)
    const handleToggle = () => {
        setToggle(prev => !prev)
    }
    return (
            <div className="form-check form-switch">
                <input  className='form-check-input m-1'
                 name='cooked_before'
                 type="checkbox" id="flexSwitchCheckDefault" 
                 checked={toggle} onChange={handleToggle}
                 />
                 
            </div> 
    )
}