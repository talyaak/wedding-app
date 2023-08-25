import express from 'express';
import { loginUser, logoutUser, validateUser } from '../controllers/authController';
import { authenticateUser } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/validate', authenticateUser, validateUser);

export default router;