import React, { useEffect } from "react";
// import ReactDOM from 'react-dom';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../Components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/HttpClient";
import styles from "./MoviesDetails.module.css";

export function MoviesDetails() {
    const { movieId } = useParams();
    const [ isLoading, setIsLoading ] = useState(true);
    // console.log(movieId);
    const [movie, setMovie] = useState(null);

    useEffect( () => {
        setIsLoading(true);
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            setIsLoading(false);
        })
    }, [movieId]);

    if(isLoading) {
        return <div>
            <Spinner />
        </div>
    }

    const imageUrl = getMovieImg(movie.poster_path, 500);

    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}><strong>Title:</strong> {movie.title}</p>
                <p><strong>Genres:</strong> {movie.genres.map( genre => genre.name).join(", ")}.</p>
                <p><strong>Release date:</strong> {movie.release_date}.</p>
                <p><strong>Runtime:</strong> {movie.runtime} min.</p>
                <p><strong>Description:</strong> {movie.overview}</p>
                <p><strong>Language:</strong> {movie.spoken_languages.map( language => language.english_name).join(", ")}.</p>
                <p><strong>Production companies:</strong> {movie.production_companies.map(companie => companie.name + ", " + companie.origin_country).join(" | ")}</p>
            </div>
        </div>
    );
}
