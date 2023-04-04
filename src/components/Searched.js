import AnimeCard from "./AnimeCard"
export default function Searched(props) {
    console.log("helo");
    return (
      <div>
        <h2>Results for {props.search}</h2>
        <div className="searched--list">
          {props.animeList.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </div>
      </div>
    );
}