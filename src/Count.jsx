import { data } from "./assets/data";
import { useState } from "react";
import Hello from "./Hello";

const Count = ()=>{

    const [value,setValue]= useState(0)
   
    const changeValue = ()=>{
        setValue((currentState)=>{

            const newValue = currentState + 1;
            console.log(newValue)
            return newValue
        })
    }
      
    return <article>
        <Hello/>
        <h1>KELVIN KAMAU</h1>
          <h2>{value}</h2>
           <button type='button' onClick={changeValue}>CHANGE</button>
           


    </article>

           }



    

  

    
   
    


        
export default Count;
