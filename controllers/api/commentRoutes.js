const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', async (req, res) => {
    try {
    const newComment = await Comment.create({
        ...req.body,
        post_id: req.params.id,
        user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
    } catch (err) {
    res.status(400).json(err);
    }
});

module.exports = router;