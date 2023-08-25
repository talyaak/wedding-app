
import crypto from 'crypto';

// Generate a random JWT secret
const generateJwtSecret = () => {
    return crypto.randomBytes(64).toString('hex');
};

// Print the generated JWT secret
console.log("Random secret key generated:");
console.log(generateJwtSecret());