import React, { useState } from 'react'


function MovieSearch() {

    const movies = [
        "Interstellar",
        "Inception",
        "Fight Club",
        "The Dark Knight",
        "The Matrix",
        "The Godfather",
        "The Prestige",
        "Whiplash",
    ];

    const [search, setSearch] = useState("");

    const filteredMovies = movies.filter(movie => movie.toLowerCase().includes(search.toLowerCase()));


    return (
        <div>
            <input
                type="text"
                placeholder="Film ara..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
            {filteredMovies.map((movie,index)=>(
                <div key={index}>{movie}</div>
            ))}
        </div>
    )
}

export default MovieSearch
