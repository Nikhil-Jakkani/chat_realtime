const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);

    // If response status is 200 (OK) but we have an error, set it to 500 (Internal Server Error)
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    
    res.status(statusCode);
    res.json({
        success: false,
        status: statusCode,
        message: err.message || 'An unexpected error occurred',
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
        // Only send detailed error in development
        error: process.env.NODE_ENV === 'production' ? undefined : err
    });
};

module.exports = {
    notFound,
    errorHandler
}


