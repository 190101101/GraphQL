const Query = {
    user:(parent, args) => {
        return {
            id: 1,
            name: 'cookie',
            surname: 'cookies'
        }
    },
}

module.exports = Query;