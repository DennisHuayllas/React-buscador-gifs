import { useState } from "react"

export const AddCategory = ({onNewValue}) => {

    const [inputValue,setImputValue]= useState('Dragon ball');

    const onInputChange=({target})=>{
        setImputValue(target.value);
       
    }
    const onSubmit = (event)=>{
        event.preventDefault(); 
        if(inputValue.trim().length <=1) return;

        //console.log(inputValue);
        //setCategories(categories =>[inputValue,...categories]);
        onNewValue(inputValue.trim())
        
        setImputValue('');
    }
  return (
    <form onSubmit={(event)=>onSubmit(event)}>
        <input 
        type="text" 
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={onInputChange}
        ></input>
    </form>
  )
}


