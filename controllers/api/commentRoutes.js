const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', async (req, res) => {
    try {
    // console.log(req.params.id == 1);
    const newComment = await Comment.create({
        description: req.body.description,
        post_id: parseInt(req.params.id),
        user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
    } catch (err) {
    res.status(400).json(err);
    }
});

router.get('/', async(req, res)=>{
    try {
    const comments = await Comment.findAll({
        include: [
            {
                model: Post,
            },
        ],
    });
    res.status(200).json(comments);
    } catch (err) {
    res.status(400).json(err);
    }
    
});



module.exports = router;