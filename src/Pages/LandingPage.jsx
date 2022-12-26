import React from "react";
// import ReactDOM from 'react-dom'
import { MoviesGrid } from "../Components/MoviesGrid.jsx";
import { Search } from "../Components/Search.jsx";

export function LandingPage() {
    return <div>
        <Search />
        <MoviesGrid />
    </div>
}
