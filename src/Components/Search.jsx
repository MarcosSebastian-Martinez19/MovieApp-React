import React, { useEffect } from "react"
import styles from "./Search.module.css"
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../Hooks/useQuery";

export function Search() {
    const query = useQuery();
    const search = query.get("search");

    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/?search=" + searchText);
    };

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} placeholder="Search" type="text" value={searchText} onChange={ (e) => setSearchText(e.target.value)} />
                <button className={styles.searchButton} type="submit">
                    <ImSearch size={20} />
                </button>
            </div>
        </form>
    )
}
