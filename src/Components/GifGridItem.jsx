import React from 'react'

const GifGridItem = ({title, url,id}) => {
    //console.log(id)
  return (
    <div className='card'>
        <img src={url} title={title}/>
        <p>{title}</p>
    </div>
  )
}

export default GifGridItem
