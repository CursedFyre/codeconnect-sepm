const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    collaborators: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    tags: [{
        type: String,
    }],
});

projectSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;