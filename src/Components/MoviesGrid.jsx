// import ReactDOM from 'react-dom';
import React from "react";
import { useState, useEffect } from "react";
import { get } from "../utils/HttpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import { useQuery } from "../Hooks/useQuery";

export function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const query = useQuery();
    const search = query.get("search");
    // console.log(search);

    useEffect(() => {
        setIsLoading(true);
        const searchURL = search
        ? "/search/movie?query=" + search
        : "/discover/movie";
        get(searchURL).then((data) => {
            // console.log(data.results);
            setMovies(data.results);
            setIsLoading(false);
        })
}, [search])

if (isLoading) {
    return <Spinner />
}

    return (
        <ul className={styles.moviesGrid}>
            {movies.map( (movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    )
}