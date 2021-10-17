import React from 'react'

import {EditButton} from './buttons/EditButton'
export const ItemTable = ({recipe_name,cooked_before,preparation,ingredients,uid}) => {
    
    const item= {recipe_name,cooked_before,preparation,ingredients,uid}
    
    
    return (
        <>
            <tr>
                <td>{recipe_name}</td>
                <td>{preparation}</td>
               
                <td>{ingredients}</td>
                <td>
                    <EditButton  item={item}/> 
                </td>      
            </tr>
            
            
        </>
    )
}
