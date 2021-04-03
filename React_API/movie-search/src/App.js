import React, {Component} from 'react';
import './App.css';


class App extends Component { 
  constructor(props) {
    super(props)
  //   const movies = [
  //   {id: 0, poster_src: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", title: "Avengers: Infinity War", overview: "The Avengers fight Thanos."},
  //   {id: 1, poster_src: "https://image.tmdb.org/t/p/w185/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", title: "The Avengers", overview: "The Avengers fight Loki."}
  // ]
  // var movieRows = [];
  // movies.forEach((movie) => {
  //   const movieRow = <div key={movie.id}>
  //     <img alt="poster" src={movie.poster_src}></img>
  //     {movie.title}
  //   </div>
  //   movieRows.push(movieRow)
  // })
    this.state = {
      rows: []
    };
}
performSearch(searchTerm) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=20128b9189b8aff8fbbb19cfb2a6e4f2&query=${searchTerm}`
  fetch(url)

  .then(response => {
    return response.json()
  })

  .then(searchResults => {
    let movies = searchResults.results;
    var movieRows = [];
    movies.forEach((movie) => {
      const movieRow = <div key={movie.id}>
        <img alt="poster" src={movie.poster_src}></img>
        {movie.title}
      </div>
    movieRows.push(movieRow)
  })
  this.setState({rows: movieRows});
})

  .catch(error => {
    console.error('Error coming from API: ', error)
  })
}

searchChangeHandler= (event) => {
  console.log("I am the event.target.value", event.target.value);
  this.performSearch(event.target.value);
}

  render() {
    return (
      <div>
        <h1>Movie Search</h1>
        <input type="text"
        id="inputField"
        onChange={this.searchChangeHandler}
        placeholder="enter your movie">
        </input>
        {this.state.rows}
      </div>
    );
  }
}

export default App;
