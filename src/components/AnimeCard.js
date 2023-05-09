import styles from './AnimeCard.module.css'
import React from 'react'
import '../Fonts/Kanit/Kanit-Medium.ttf'

export default function AnimeCard({anime}){
    return (
        <article className={styles.animeCard}>
            <div class={styles.cardContainer}>
                <img className={styles.images} alt='' src={anime.images.jpg.image_url}/>
                <div class={styles.gradient}></div>
                <div class={styles.cardTitle}>{anime.title}</div>
            </div>
        </article>
    );
}