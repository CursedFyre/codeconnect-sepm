const Project = require('../models/Project');

const exploreService = {
    getExploreData: async () => {
        try {
            const projects = await Project.find().populate('owner', 'name avatar'); // Assuming Project has an owner field that references User
            return projects;
        } catch (error) {
            throw new Error('Error fetching explore data: ' + error.message);
        }
    },

    getProjectById: async (projectId) => {
        try {
            const project = await Project.findById(projectId).populate('owner', 'name avatar');
            if (!project) {
                throw new Error('Project not found');
            }
            return project;
        } catch (error) {
            throw new Error('Error fetching project: ' + error.message);
        }
    }
};

module.exports = exploreService;