
export const getGif = async (category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=tTtNA934ZqYIGDvEfGw4tGMm0xp7E97r&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img =>({
        id:img.id,
        title: img.title,
        url:img.images.downsized_medium.url
    }))
    //console.log(gifs)
    return gifs
}