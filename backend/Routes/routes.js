import express from 'express';
import { signup } from '../Contoller/register.js';
import { login } from '../Contoller/login.js';
import { auth } from '../Contoller/auth.js';
import { blogs } from '../Contoller/blogs.js';
import { createpost } from '../Contoller/createpost.js';
import { allpost } from '../Contoller/userpost.js';
import { deletePost } from '../Contoller/deletepost.js';
import { getPosts, createPost } from '../Contoller/blogController.js';
import { updatepost } from '../Contoller/updatepost.js';
import { allpostdata } from '../Contoller/allpost.js';
import { likePost } from '../Contoller/likepost.js';
import { commenthand } from '../Contoller/comment.js';
import { getComments } from '../Contoller/getcomment.js';

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.get('/blogs',auth,blogs);
router.get('/blogs/posts',auth,getPosts);
router.post('/blogs/posts',auth,createPost);
router.delete('/blogs/posts/:id',auth,deletePost)
router.post('/createpost',auth,createpost)
router.get('/allpost',auth,allpost)
router.delete('/deletepost/:id',auth,deletePost)
router.put('/updatepost/:id',auth,updatepost)


// For allPost 
router.get('/allpost/data', auth, allpostdata);
router.post('/allpost/like', auth, likePost);
router.post('/comment',auth,commenthand);
router.get('/comment/:postId',auth,getComments);

export default router;