import React from 'react'
import { ModalOpen } from '../modal/ModalOpen'
export const ModalScreen = ({showModal,setShowModal}) => {
 
    return (
        <div>
            {
            showModal
            ?
            (
                <ModalOpen showModal={showModal} setShowModal={setShowModal}/>
            )
            :
            (null)
        }
        </div>
    )
}