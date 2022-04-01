import React from "react";
import { Container, Row, Col} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { propTypes } from "react-bootstrap/esm/Image";
import './MovieList.css';

const MovieList = (props) => {
    return(
        <div>
            <div>
                <h1>{props.heading}</h1>
            </div>
            <Container fluid className="movie-app">
                <Row>
                    <>
                    {props.movies.map((movie, index)=> (
                        <Col key={movie.imdbID} className="d-flex justify-content-start col-auto">
                            <img src={movie.Poster} alt="movie" className="poster-image"></img>
                        </Col>
                    ))}
                    </>
                </Row>
            </Container>
        </div>
    );
};

export default MovieList;
