import React from "react";
// import ReactDOM from 'react-dom'
import { MoviesGrid } from "../Components/MoviesGrid.jsx";
import { Search } from "../Components/Search.jsx";
import { useDebounce } from "../Hooks/useDebounce.jsx";
import { useQuery } from "../Hooks/useQuery.jsx";

export function LandingPage() {
    const query = useQuery();
    const search = query.get("search");
    const debouncedSearch = useDebounce(search, 500);
    return <div>
        <Search />
        <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
}
