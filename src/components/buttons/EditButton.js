import React, { useState } from 'react'
import { EditModal } from '../modal/EditModal'

export const EditButton = ({item}) => {
    
    const [showModal, setShowModal] = useState(false)
    const openModal= () => {
        setShowModal(prev =>!prev)
    }
    const {recipe_name,preparation,ingredients,cooked_before,uid}=item
    const [data,setData] = useState({
        recipe_name,
        preparation,
        ingredients,
        cooked_before,
        uid
    })
    
    return (
        <>
        <button className='btn btn-outline-primary'
            onClick={openModal}
                    >editar</button> 
         {showModal &&
            <EditModal showModal={showModal} setShowModal={setShowModal} data={data} setData={setData}/>
         }            
        
        </>
    )
}
