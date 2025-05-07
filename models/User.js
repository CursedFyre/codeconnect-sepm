const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Method to update the updatedAt field before saving
userSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Method to find a user by username
userSchema.statics.findByUsername = function(username) {
    return this.findOne({ username });
};

// Method to find a user by email
userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email });
};

const User = mongoose.model('User', userSchema);

module.exports = User;