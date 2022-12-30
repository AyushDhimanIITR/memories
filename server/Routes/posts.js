import express from "express";

const router = express.Router();

import { createPost, deletePost, getPosts, likePost, updatePost } from "../Controllers/postController.js";

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/like', likePost);

export default router;