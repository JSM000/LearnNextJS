import Movie from "../../components/movie"
import styles from "../../styles/home.module.css"

export const metadata = {
    title: 'Home',
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

const  getMovies = async () => {
    await new Promise((resolve)=> setTimeout(resolve, 1000))
    const response = await fetch(API_URL)
    return await response.json()
}   

export default async function HomePage() {
    const movies = await getMovies()
    return (
        <div className={styles.container}> 
            {movies.map(movie => (
                <Movie key={movie.id} title={movie.title} id={movie.id} poster_path={movie.poster_path}/>
            )
                // <li key={movie.id}><Link  href={`/movies/${movie.id}`}>{movie.title}</Link></li>
            )}
        </div>
    );
    // return fetch(API_URL).then((response) => response.json()).then((movies) => <div> {JSON.stringify(movies)} </div>)
}

// 'use client'

// import { useEffect, useState } from "react";

// export default function Page() {
//     const [isLoading, setIsLoading] = useState(true)
//     const [movies, setMovies] = useState([])
//     const getMovies = async() => {
//         const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
//         const json = await response.json()
//         setMovies(json)
//         setIsLoading(false)
//     }   
//     useEffect(()=>{
//         getMovies()
//     })

//     return (
//     <div>
//         {isLoading ? "loading..." : JSON.stringify(movies)}
//     </div>
//     )
// }