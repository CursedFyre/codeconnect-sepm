const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
const homepageController = require('../controllers/homepageController');
const Comment = require('../models/Comment');
const Post = require('../models/Post');

router.get('/', homepageController.getHomepageData);

// Get comments for a specific post
router.get('/posts/:postId/comments', async (req, res) => {
    try {
        const comments = await Comment.find({ post: req.params.postId })
            .populate('author', 'username')
            .sort({ createdAt: -1 });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new comment to a post
router.post('/posts/:postId/comments', async (req, res) => {
    try {
        const comment = new Comment({
            content: req.body.content,
            author: req.user._id, // Assuming you have authentication middleware
            post: req.params.postId
        });
        const savedComment = await comment.save();
        
        // Increment comment count on the post
        await Post.findByIdAndUpdate(req.params.postId, {
            $inc: { commentCount: 1 }
        });

        const populatedComment = await Comment.findById(savedComment._id)
            .populate('author', 'username');
        res.status(201).json(populatedComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a comment
router.delete('/comments/:commentId', async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.commentId);
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;