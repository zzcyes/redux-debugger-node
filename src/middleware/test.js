const test = () => {
    return (next) => (action) => {
        console.debug("Hello Test~");
        return next(action);
    };
};

module.exports = test