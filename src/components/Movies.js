import React from 'react'
import PropTypes from 'prop-types'
import './movies.css'
const Movies = (props) => {
  let login = true;

  {
    (() => {
      if(login){
        return <h1>You're logged in </h1>
      } else {
        return <h1>You're not logged in</h1>
      }
    })()
  }

  return (
    <>
    <div className='movie'>Movie &nbsp;
        <br/>
        <span>Movie Name</span> <span>{props.element.Title}</span><br/>
        <span>Movie Year</span> <span>{props.element.Year}</span><br/>
        <span>Poster</span> <span><img src={props.Poster} alt='poster'></img> </span><br/>
    </div>
    </>
  )
}

//Movies.propTypes = {}

Movies.prototype = {
  Title: PropTypes.string,
  Year : PropTypes.string,
  Poster : PropTypes.string,
}

/*
Movies.defaultProps = {
  Title: "Harry",
  Year : "2014",
  Poster : "2014",
} */

export default Movies;