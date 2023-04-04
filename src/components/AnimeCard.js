export default function AnimeCard({anime}){
    return (
        <article className="anime--card">
            <span>
                <img src={anime.images.jpg.image_url} alt=''/>
                <h3>{anime.title}</h3>
            </span>
        </article>
    );
}