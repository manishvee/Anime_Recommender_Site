import AnimeCard from "./AnimeCard"
import styles from './ScrollableList.module.css'
import React from 'react'

export default function TopAiring({topAnime,setAnimeInfo}) {
    return (
        <div className={styles.scrollableList} onClick={()=>setAnimeInfo(topAnime)}>
          {topAnime.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </div>
    );
}
