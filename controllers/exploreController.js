const exploreService = require('../services/exploreService');
const User = require('../models/User');

exports.getExploreData = async (req, res) => {
    try {
        const exploreData = await exploreService.fetchExploreData();
        res.status(200).json({
            success: true,
            data: exploreData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

const exploreController = {
    searchUsers: async (req, res) => {
        try {
            const { query } = req.query;
            const searchResults = await User.find({
                $or: [
                    { username: { $regex: query, $options: 'i' } },
                    { primaryRole: { $regex: query, $options: 'i' } },
                    { domainExpertise: { $regex: query, $options: 'i' } },
                    { collaborationPreference: { $regex: query, $options: 'i' } }
                ]
            }).limit(10);
            
            res.json(searchResults);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = exploreController;