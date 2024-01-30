const Query = {
    user:(parent, args) => {
        return {
            username: 'cookie',
            createdAt: Date.now()
        }
    },
}

module.exports = Query;