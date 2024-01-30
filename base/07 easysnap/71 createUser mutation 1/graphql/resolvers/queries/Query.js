const Query = {
    user:(parent, args) => {
        return {
            username:'cookie',
            password: 'cashcasapdaj',
            createdAt: '30.01.2024',
        }
    }
}

module.exports = Query;