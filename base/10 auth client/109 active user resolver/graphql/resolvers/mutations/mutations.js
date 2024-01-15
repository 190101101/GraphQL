const user = require('./user.mutation');
const snap = require('./snap.mutation');

module.exports = {...user, ...snap}