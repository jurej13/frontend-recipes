import React, { useEffect, useState }  from 'react'
import { ItemTable } from './ItemTable';

export const Table = () => {
    
    const url = 'http://localhost:8080/api/recipes/'
    
    const [data,setData] =  useState([]);
    const [isLoading,setIsLoading] = useState(true)
   useEffect(() => {
       
       fetch(url)
        .then(resp => {
            return resp.json()
        })
        .then((data)=>{
            setData(data)
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
        })
   }, [])
     
    
    return (
        <div className='table-responsive mt-3'>
            {
            isLoading
            ?
                (
                <h1>loading</h1>
                )
            :
                (
                    
                    <table className='table table-sm table-hover table-striped '>
                        <thead className='table-light'>
                            <tr>
                                <th className='col'>Recipe Name</th>
                                <th className='col'>Preparation</th>
                                <th className='col'>Cooked Before</th>
                                <th className='col'>Ingredients</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.recipes.map(item => (
                                    <ItemTable key={item.uid} {...item} />
                                ))
                            } 
                        </tbody>
                    </table>
                )
            }
            
        </div>
    )
}
