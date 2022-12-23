import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { get } from "../utils/HttpClient";
// import ReactDOM from 'react-dom'
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css"

export function MoviesGrid() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie").then((data) => {
            // console.log(data.results);
            setMovies(data.results)
        })
}, [])
    return (
        <ul className={styles.moviesGrid}>
            {movies.map( (movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    )
}