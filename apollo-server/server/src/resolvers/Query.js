const Query = {
  directors: (parent, args, { db }) => db.directors,
  movies: (parent, args, { db }) => db.movies,
  director: (parent, args, { db }) => {
    return db.directors.find((director) => director.id === args.id);
  },
  movie: (parent, args, { db }) => {
    return db.movies.find((movie) => movie.id === args.id);
  },
};


module.exports = Query;