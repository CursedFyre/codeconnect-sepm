const User = require('../models/User');

const getHomepageData = async () => {
    try {
        const users = await User.find().limit(10); // Fetching a limited number of users for the homepage
        return users;
    } catch (error) {
        throw new Error('Error fetching homepage data: ' + error.message);
    }
};

module.exports = {
    getHomepageData,
};