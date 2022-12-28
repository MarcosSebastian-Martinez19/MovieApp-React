import React from "react"
import styles from "./Search.module.css"
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../Hooks/useQuery";

export function Search() {
    const query = useQuery();
    const search = query.get("search");

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    placeholder="Search"
                    type="text"
                    value={search}
                    onChange={(e) => {
                        const value = e.target.value;
                        navigate("/?search=" + value);
                    }} />
                <ImSearch size={20} color="black" className={styles.searchButton} />
            </div>
        </form>
    )
}
