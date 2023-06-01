import React from 'react'
import './MovieCard.scss'

const MovieCard = ({movie}) => {
  return (
    <div className="movie">
        <div className='year'>
            <p>{movie.Year}</p>
        </div>

        <div className='img'>
            <img src={movie.Poster !== 'N/A' ? movie.Poster:'htpps://via.placeholder.com'} alt={movie.Title} />
        </div>
    
        <div className="type">
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard