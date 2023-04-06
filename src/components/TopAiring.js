import AnimeCard from "./AnimeCard"
export default function TopAiring({topAnime}) {
    return (
      <div>
        <h2>Top Airing</h2>
        <div className='topanime--list'>
          {topAnime.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </div>
      </div>
    );
}
