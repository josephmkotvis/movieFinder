import React from 'react';
import { CardDeck } from 'react-bootstrap';
import MovieCards from './MovieCards';

const MovieRow = ({ movies }) => (
    <CardDeck style={{ justifyContent: 'center', paddingBottom: '15px' }}>
        <MovieCards movies={movies} />
    </CardDeck >
)

export default MovieRow;