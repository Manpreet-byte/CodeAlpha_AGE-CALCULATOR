import Chat from '../models/Chat.js';

const mockAIResponses = [
  "That's an interesting question! Let me think about it.",
  "I'd be happy to help you with that.",
  "Great question! Here's what I think...",
  "This is a fascinating topic. Let me elaborate.",
  "I understand your concern. Here's my perspective.",
  "Excellent point! You're on the right track.",
  "That's a complex question with multiple angles.",
  "I appreciate your curiosity about this."
];

const generateMockResponse = (userMessage) => {
  const greeting = mockAIResponses[Math.floor(Math.random() * mockAIResponses.length)];
  const mockBody = `${greeting} Based on your message about "${userMessage.substring(0, 30)}...", here are some insights and suggestions for you to consider. Feel free to ask follow-up questions!`;
  return mockBody;
};

export const sendMessage = async (req, res) => {
  try {
    const { message, chatId } = req.body;
    const userId = req.user._id;

    if (!message || message.trim().length === 0) {
      return res.status(400).json({ message: 'Message cannot be empty' });
    }

    let chat;
    if (chatId) {
      chat = await Chat.findById(chatId);
      if (!chat || chat.user.toString() !== userId.toString()) {
        return res.status(403).json({ message: 'Unauthorized' });
      }
    } else {
      const firstMsg = message.substring(0, 40).trim();
      chat = await Chat.create({
        user: userId,
        title: firstMsg || 'New Chat',
        messages: []
      });
    }

    chat.messages.push({ role: 'user', content: message });

    const aiResponse = generateMockResponse(message);
    chat.messages.push({ role: 'assistant', content: aiResponse });
    chat.updatedAt = new Date();

    await chat.save();

    res.json({
      chatId: chat._id,
      userMessage: message,
      aiResponse: aiResponse,
      messages: chat.messages
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getChat = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    if (!chat || chat.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    res.json(chat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getChatHistory = async (req, res) => {
  try {
    const chats = await Chat.find({ user: req.user._id })
      .select('_id title createdAt updatedAt')
      .sort({ updatedAt: -1 });
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteChat = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    if (!chat || chat.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    await Chat.findByIdAndDelete(req.params.id);
    res.json({ message: 'Chat deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const clearAllChats = async (req, res) => {
  try {
    await Chat.deleteMany({ user: req.user._id });
    res.json({ message: 'All chats cleared' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
