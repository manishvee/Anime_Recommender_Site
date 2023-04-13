import AnimeCard from "./AnimeCard"
import styles from './TopAiring.module.css'
export default function TopAiring({topAnime}) {
    return (
      <div>
        <h2>Top Airing</h2>
        <div className={styles.topanimeList}>
          {topAnime.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </div>
      </div>
    );
}
