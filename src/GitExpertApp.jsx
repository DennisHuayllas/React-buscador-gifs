import React from 'react'
import { useState } from 'react'
import { AddCategory,GifGrid } from './Components';


export const GitExpertApp = () => {

const [categories, setCategories]= useState(['Dragon ball']);
const onAddCategory=(newCategory)=>{
    
    //setCategoreis([ 'Naruto',...categories]);
    if (categories.includes(newCategory))return;
    setCategories([newCategory,...categories])

}
  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewValue={(value)=> onAddCategory(value)}
      //setCategories={setCategories}
      />
      <ol>
        {categories.map((category) =>(

          <GifGrid 
          key={category} 
          category={category}/> 

          ))}
      </ol>
    </>
  )
}


