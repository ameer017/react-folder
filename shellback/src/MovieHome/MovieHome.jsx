import React from 'react'
import './MovieHome.scss'
import {AiOutlineSearch} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=d4b1eacf'

const MovieHome = () => {
    const [movies, setMovie] = useState([])
    const [searchTerm, setSearchTerm] = useState('')


    const SearchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovie(data.Search)

    } 
    useEffect(() => {SearchMovies('Olympus has fallen')}, [])

  return (
    <div className='movieApp'>
        <h1 className='heading'>DLT Africa MA<span id='x'>X</span>.</h1>

        <div className="search">
            <div className="emptyAnim"></div>
            <input type='text' className="searchControl" placeholder='search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />


            <button className='btn' onClick={() => SearchMovies(searchTerm)}><AiOutlineSearch /></button>
        </div>

        {movies?.length > 0 ? (
        <div className="container">
            {movies.map((movie, i) => (<MovieCard movie={movie}/>))}
        </div>
        ):(<div className='blank'>
            <h2>Movie not found -- try another movie name</h2>
        </div>)} 

    </div>
  )
}

export default MovieHome