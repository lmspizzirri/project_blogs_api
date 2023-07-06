const express = require('express');

const postController = require('../controllers/post.controller');
const { validateToken } = require('../middlewares/validateToken');
const { postFieldsValidation } = require('../middlewares/createPostFields');
const { updatePostFields } = require('../middlewares/updatePostFields');

const routers = express.Router();

routers.post(
    '/', 
    validateToken,
    postFieldsValidation,  
    postController.createPost,
);
routers.put(
    '/:id', 
    validateToken,  
    updatePostFields,
    postController.updatePost,
);
routers.get('/', validateToken, postController.getAll);
routers.get('/:id', validateToken, postController.getById);
routers.delete('/:id', validateToken, postController.delelePost);

module.exports = routers;