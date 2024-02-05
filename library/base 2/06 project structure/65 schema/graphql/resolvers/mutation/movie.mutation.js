module.exports = {
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
