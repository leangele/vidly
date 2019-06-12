import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  fillMovies() {
    return this.state.movies.map(movie => (
      <tr key={movie._id}>
        <td key={movie.title}>{movie.title}</td>
        <td key={movie.genre.id}>{movie.genre.name}</td>
        <td key={movie.numberInStock}>{movie.numberInStock}</td>
        <td key={movie.dailyRentalRate}>{movie.dailyRentalRate}</td>
        <td>
          <button
            onClick={() => this.handleDelete({ id: movie._id })}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }

  showCountOfMovies() {
    if (this.state.movies.length === 0) {
      return <h2> No movies in Db</h2>;
    }
    return <h3>Showing {this.state.movies.length} movies in DataBase</h3>;
  }

  handleDelete = id => {
    console.log(id);
    deleteMovie(id);
    this.setState({ movies: getMovies() });
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.showCountOfMovies()}</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>{this.fillMovies()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
