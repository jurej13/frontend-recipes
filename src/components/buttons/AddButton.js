import React, { useState } from 'react'
import { BsPlusLg } from "react-icons/bs";
import { ModalScreen } from '../Screens/ModalScreen';
export const AddButton = () => {
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev =>!prev)
      }
    return (
        <div>
            <button 
                type="button" 
                className="btn btn-primary btn__add position-absolute bottom-0 end-0 mb-3"
                onClick={openModal}
                >
                    <BsPlusLg className='icon__add'/>
                </button>
                <ModalScreen showModal={showModal} setShowModal={setShowModal}/>
        </div>
    )
}
