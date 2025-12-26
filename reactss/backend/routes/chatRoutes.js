import express from 'express';
import { sendMessage, getChat, getChatHistory, deleteChat, clearAllChats } from '../controllers/chatController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, sendMessage);
router.get('/history', protect, getChatHistory);
router.get('/:id', protect, getChat);
router.delete('/:id', protect, deleteChat);
router.delete('/', protect, clearAllChats);

export default router;
