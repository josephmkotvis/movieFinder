import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import noImage from '../../img/noImage.png';

const cardImageStyle = {
    width: '286px', height: '422px'
}


const MovieCards = ({ movies }) =>
    movies !== null && movies.length > 0 && movies.map(movie => (
        <Card style={{ maxWidth: '18rem', overflow: 'hidden' }} key={movie.imdbID}>
            {movie.Poster !== 'N/A' ?
                <Card.Img variant="top" src={movie.Poster} style={cardImageStyle} />
                :
                <Card.Img variant="top" src={noImage} style={cardImageStyle} />
            }
            <Card.Body>
                <Card.Title style={{ height: '24px' }} >{movie.Title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{movie.Year}</ListGroupItem>
            </ListGroup>
        </Card>

    ))


export default MovieCards;