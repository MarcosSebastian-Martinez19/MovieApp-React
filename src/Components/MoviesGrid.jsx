// import ReactDOM from 'react-dom';
import React from "react";
import { useState, useEffect } from "react";
import { get } from "../utils/HttpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { NotFound } from "./NotFound";

export function MoviesGrid({search}) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // console.log(search);

    useEffect(() => {
        setIsLoading(true);
        const searchURL = search
            ? "/search/movie?query=" + search + "&page=" + page
            : "/discover/movie?page=" + page;
        get(searchURL).then((data) => {
            // console.log(data.results);
            setMovies((prevMovies) => prevMovies.concat(data.results));
            setHasMore(data.page < data.total_pages);
            setIsLoading(false);
        })
    }, [search, page])

    if (movies.length === 0) {
        return <NotFound />
    }

    return (
        <InfiniteScroll
        dataLength={movies.length}
        hasMore={hasMore}
        next={() => setPage(prevPage => prevPage + 1)}
        loader={<Spinner />}>
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </InfiniteScroll>
    )
}