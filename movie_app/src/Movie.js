import React, { Component } from 'react';
import PropType from 'prop-types';
import './Movie.css';

class Movie extends Component{

    static propType = {
        title : PropType.string.isRequired,
        poster: PropType.string,
    }

    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src={this.props.poster} />
        )
    }
}

// function Movie({title, poster}){
//     return (
//         <div>
//             <MoviePoster poster={poster} />
//             <h1>{title}</h1>
//         </div>
//     )
// }

// function MoviePoster({poster}){
//     return (
//         <img src={poster} />
//     )
// }

export default Movie;