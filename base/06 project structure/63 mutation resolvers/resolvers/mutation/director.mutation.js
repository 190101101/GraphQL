module.exports = {
  createDirector: (parent, args, { db }) => {
    const newDirector = {
      id: Math.random().toString(36).substring(2, 10),
      ...args.data,
    };

    db.directors.push(newDirector);
    return newDirector;
  },
};
