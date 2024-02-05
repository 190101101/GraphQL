const user = require('./user.query');
const snap = require('./snap.query');

const Query = {
    ...user,
    ...snap,
}

module.exports = Query;