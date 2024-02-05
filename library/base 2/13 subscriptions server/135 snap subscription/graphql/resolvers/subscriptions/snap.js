module.exports = {
    SnapAdded:{
        subscribe: (parent, args, {pubsub}) => {
            return pubsub.asyncIterator('SnapAdded');
        }
    }
};
