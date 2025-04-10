const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined in environment variables');
    }
    
    try {
        return jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: '30d'
        });
    } catch (error) {
        console.error('Token generation error:', error);
        throw new Error('Error generating authentication token');
    }
};

module.exports = generateToken;