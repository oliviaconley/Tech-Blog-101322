const router = require('express').Router();
const { Comment } = require('../../models'); 

//create comment 
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            //something here 
        });
        res.status(200).json(newComment);
    } catch(err) {
        res.status(400).json(err);
    }
});