import styles from './AnimeCard.module.css'
import React from 'react'
import '../Fonts/Kanit/Kanit-Medium.ttf'


export default function AnimeCard({anime,setAnimeInfo}){
    return (
        <article className={styles.animeCard} >
            <div class={styles.cardContainer} onClick={()=>setAnimeInfo(anime)}>
                <img className={styles.images} alt='' src={anime.images.jpg.image_url} />
                <div class={styles.gradient}></div>
                <div class={styles.cardTitle}>{anime.title}</div></div>
                <div className={styles.overlay}>
                <img alt='' src={anime.images.jpg.small_image_url} />
                      <h4>{anime.title_japanese}</h4>
                      <h3>SYNOPSIS</h3>
                      <div className={styles.synopsis}>
                      <p>Type:{anime.type}</p>
                <p>Episodes:{anime.episodes}</p>
                <p>Duration:{anime.duration}</p>
                <p>Rating:{anime.rating}</p>
               
                        <p>{anime.synopsis}</p>
                  </div>
                  </div>
                    
                
                  
        </article>
    );
}