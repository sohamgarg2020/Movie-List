import "../css/Moviecard.css"
function MovieCard({ movie }) {

    function onFavorite() {
        alert("Clicked")
    }


    const formattedDate = movie.release_date
        ? `${new Date(movie.release_date).toLocaleString("en-US", {
            month: "long",
        })} ${new Date(movie.release_date).getDay()}, ${new Date(movie.release_date).getFullYear()}`
        : "Unknown";


    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavorite}>
                    ♡
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>
                {formattedDate}
            </p>
        </div>
    </div>
}

export default MovieCard;