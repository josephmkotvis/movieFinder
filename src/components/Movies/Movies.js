import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieRow from './MovieRow';
import { chunk } from 'lodash';


const Movies = ({ movies }) =>
    movies !== null && movies.length > 0 &&
    chunk(movies.sort((movie1, movie2) => { return movie1.Title.localeCompare(movie2.Title); }), 3).map(chunkedMovies => (
        <MovieRow movies={chunkedMovies}></MovieRow>
    ))

Movies.propTypes = {
    movies: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    movies: state.movie
});

export default connect(mapStateToProps)(Movies);