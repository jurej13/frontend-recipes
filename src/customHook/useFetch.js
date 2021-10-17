import  { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    
    const isMounted = useRef(true)
    //en este caso el use ref es para que mantenga la referencia una vez que el 
    //state esta montado.

    const [state, setstate] = useState({data: null,loading:true,error:null})
    useEffect(()=>{
        return ()=>{    
            // este return es para cuando mi efecto se desmonte, quiero que cambie el valor
            isMounted.current = false;
        }
    },[])

    useEffect(()=>{
        setstate({data:null,loading:true,error:null})
        fetch(url)
            .then(resp=> resp.json())
            .then(data=>{
                if(isMounted.current){
                    setstate({
                        loading: false,
                        error: null,
                        data 
                    })
                }else{
                    console.log(`Error en la promise del fetch`)
                }
            })
    },[url])

    return state;


}