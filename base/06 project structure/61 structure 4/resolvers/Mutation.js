const Mutation = {
  createDirector: (parent, args, { db }) => {
    const newDirector = {
      id: Math.random().toString(36).substring(2, 10),
      ...args.data,
    };

    db.directors.push(newDirector);
    return newDirector;
  },
  createMovie: (parent, args, { db }) => {
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
};

module.exports = Mutation;
