const homepageService = require('../services/homepageService');

exports.getHomepageData = async (req, res) => {
    try {
        const data = await homepageService.fetchHomepageData();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving homepage data', error: error.message });
    }
};