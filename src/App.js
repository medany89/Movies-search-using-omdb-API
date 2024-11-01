import "./styles.css";
import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Row, Col } from "react-bootstrap";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(
      `HTTPS://www.omdbapi.com/?s=${searchTerm}&apikey=c876a735`
    );
    const data = await response.json();
    setMovies(data.Search || []);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };
  const addToFavorites = async (imdbID) => {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${imdbID}&apikey=c876a735`
    );
    const data = await response.json();
    setFavorites([...favorites, data]);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">OMDB</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search movies"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button variant="outline-success" onClick={handleSearch}>
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
      <Container>
        <Row>
          {movies.map((movie) => (
            <Col key={movie.id} sm={6} md={4} lg={3} className="mb-4 mt-4">
              <MovieCard movie={movie} addToFavorites={addToFavorites} />
            </Col>
          ))}
        </Row>
      </Container>
      {/* <div className="main-content">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            addToFavorites={addToFavorites}
          />
        ))}
      </div> */}
    </div>
  );
};

export default App;
