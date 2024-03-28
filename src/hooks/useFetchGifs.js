import { useEffect, useState } from "react";
import { getGif } from "../Helpers/getGifs";

const UseFetchGifs = (category) => {
  const [images,setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  const getImages = async()=>{

    const newImages = await getGif (category);
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect(()=>{
    getImages();
  },[])

  return (
    { 
      images,
      isLoading,
    }
  )
}

export default UseFetchGifs
