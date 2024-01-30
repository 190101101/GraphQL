module.exports = {
    user:(parent, args) => {
        return {
            username: 'cookie',
            createdAt: Date.now()
        }
    },
}
