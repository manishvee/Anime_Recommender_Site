import React from 'react'
import '../Fonts/Kanit/Kanit-Medium.ttf'

export default function AnimeCard({anime}){
    return (
        <>
            <div>
                <img alt='' src={anime.images.jpg.small_image_url}/>
                <p>{anime.title}</p>
                <p>{anime.title_japanese}</p>
                <p>Type:{anime.type}</p>
                <p>Episodes:{anime.episodes}</p>
                <p>Duration:{anime.duration}</p>
                <p>Rating:{anime.rating}</p>
                <p>{anime.synopsis}</p>
            </div>
        </>
    );
}