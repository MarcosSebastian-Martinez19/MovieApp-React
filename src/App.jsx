import styles from "./App.module.css";
import "./App.css";
import React from "react";
// import ReactDOM from 'react-dom'

// import { MoviesGrid } from "./Components/MoviesGrid";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { MoviesDetails } from "./Pages/MoviesDetails";
import { LandingPage } from "./Pages/LandingPage";

const App = () => {
    return (
        <Router>
            <header>
                <Link to="/">
                    <h1 className={styles.title}>Movies</h1>
                </Link>
            </header>
            <main>
                <Routes>
                    <Route path="/movies/:movieId" element={<MoviesDetails />} />
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;