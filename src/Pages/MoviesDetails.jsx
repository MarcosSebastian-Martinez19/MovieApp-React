import React, { useEffect } from "react";
// import ReactDOM from 'react-dom'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/HttpClient";
import styles from "./MoviesDetails.module.css"

export function MoviesDetails() {
    const { movieId } = useParams();
    // console.log(movieId)
    const [movie, setMovie] = useState(null)
    useEffect( () => {
        get("/movie/" + movieId).then((data) => {
            setMovie(data)
        })
    }, [movieId])

    if(!movie) {
        return null;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

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
