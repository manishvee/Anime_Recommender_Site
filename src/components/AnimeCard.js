import styles from './AnimeCard.module.css'
export default function AnimeCard({anime}){
    return (
        <article className={styles.animeCard}>
            {console.log(styles.animeCard)}
                <img className={styles.images} src={anime.images.jpg.image_url} alt=''/>
                <h3>{anime.title}</h3>
        </article>
    );
}