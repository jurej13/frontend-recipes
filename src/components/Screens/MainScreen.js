import React from 'react'

import { AddButton } from '../buttons/AddButton'
import { Image } from '../Image'
import { Table } from '../Table'

export const MainScreen = () => {
   
    return (
        <div className='row justify-content-start'>
            <div className='col-3'>
                <Image />
            </div>
            <div className='col-8'>
                <Table />
                <AddButton />
            </div>
            
        </div>
    )
}
