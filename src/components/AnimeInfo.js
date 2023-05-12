import React from 'react'
import '../Fonts/Kanit/Kanit-Medium.ttf'
import HoverCard from './HoverCard'
export const AnimeInfo = (props) => {
    
   return (     
   <>
         {props.animeInfo.map((anime)=>(
         <HoverCard anime={anime} key={anime.mal_id}/>
         ))}
        </>
   )
         }  