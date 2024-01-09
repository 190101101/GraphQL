const resolvers = {
  Query: {
    directors: (parent, args, {db}) => db.directors,
    movies: (parent, args, {db}) => db.movies,
    director: (parent, args, {db}) => {
      return db.directors.find((director) => director.id === args.id);
    },
    movie: (parent, args, {db}) => {
      return db.movies.find((movie) => movie.id === args.id);
    },
  },
  Mutation: {
    createDirector: (parent, args, {db}) => {
      const newDirector = {
        id: Math.random().toString(36).substring(2, 10),
        ...args.data,
      };

      db.directors.push(newDirector);
      return newDirector;
    },
    createMovie: (parent, args, {db}) => {
      const directorExists = db.directors.some(
        (director) => director.id === args.data.directorId
      );
      if (!directorExists) {
        throw new Error("director doet not exists");
      }

      const newMovie = {
        id: Math.random().toString(36).substring(2, 10),
        ...args.data,
      };

      db.movies.push(newMovie);
      return newMovie;
    },
  },
  Movie: {
    director: (parent, args, {db}) => {
      return db.directors.find((director) => director.id === parent.directorId);
    },
  },
  Director: {
    movies: (parent, args, {db}) => {
      return db.movies.filter((movie) => movie.directorId === parent.id);
    },
  },
};

module.exports = {
  resolvers:resolvers
}