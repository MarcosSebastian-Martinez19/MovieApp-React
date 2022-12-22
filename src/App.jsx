// import logo from "./logo.svg";
import styles from "./App.module.css"
import "./App.css";
import React from "react";
import { MoviesGrid } from "./MoviesGrid";

const App = () => {
    return (
        <div>
            <header>
                <h1 className={styles.title}>Movies</h1>
            </header>
            <main>
                <MoviesGrid />
            </main>
        </div>
    )
}

export default App;