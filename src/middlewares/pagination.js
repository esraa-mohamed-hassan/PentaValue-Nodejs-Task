const paginationMiddleware = (req, res, next) => {
    const { page, limit } = req.query;

    // Set default values if not provided
    req.query.page = page || 1;
    req.query.limit = limit || 10;

    next();
};

module.exports = paginationMiddleware;