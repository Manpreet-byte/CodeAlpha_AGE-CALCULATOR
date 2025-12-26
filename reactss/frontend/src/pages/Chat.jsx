import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../api/client';
import './Chat.css';

const Chat = () => {
  const { user } = useAuth();
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (user) fetchChatHistory();
  }, [user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const fetchChatHistory = async () => {
    try {
      const { data } = await api.get('/api/chats/history');
      setChats(data);
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  };

  const fetchChat = async (chatId) => {
    try {
      const { data } = await api.get(`/api/chats/${chatId}`);
      setCurrentChat(data._id);
      setMessages(data.messages);
      setShowHistory(false);
    } catch (error) {
      console.error('Error fetching chat:', error);
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setLoading(true);

    try {
      const { data } = await api.post('/api/chats', {
        message: userMsg,
        chatId: currentChat
      });

      setCurrentChat(data.chatId);
      setMessages(data.messages);
      await fetchChatHistory();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  const handleNewChat = () => {
    setCurrentChat(null);
    setMessages([]);
    setShowHistory(false);
  };

  const handleDeleteChat = async (chatId) => {
    if (window.confirm('Delete this chat?')) {
      try {
        await api.delete(`/api/chats/${chatId}`);
        if (currentChat === chatId) {
          setCurrentChat(null);
          setMessages([]);
        }
        await fetchChatHistory();
      } catch (error) {
        console.error('Error deleting chat:', error);
      }
    }
  };

  const handleClearAll = async () => {
    if (window.confirm('Clear all chats? This cannot be undone.')) {
      try {
        await api.delete('/api/chats');
        setChats([]);
        setCurrentChat(null);
        setMessages([]);
      } catch (error) {
        console.error('Error clearing chats:', error);
      }
    }
  };

  if (!user) {
    return (
      <div className="chat-page">
        <div className="chat-container">
          <div className="chat-auth">
            <h2>Please log in to use the chatbot</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-page">
      <div className="chat-container">
        <aside className={`chat-sidebar ${showHistory ? 'active' : ''}`}>
          <div className="sidebar-header">
            <h3>Chat History</h3>
            <button className="new-chat-btn" onClick={handleNewChat}>+ New</button>
          </div>

          <div className="chats-list">
            {chats.length === 0 ? (
              <p className="no-chats">No chats yet</p>
            ) : (
              chats.map(chat => (
                <div
                  key={chat._id}
                  className={`chat-item ${currentChat === chat._id ? 'active' : ''}`}
                  onClick={() => fetchChat(chat._id)}
                >
                  <div className="chat-item-text">
                    <p className="chat-title">{chat.title}</p>
                    <p className="chat-date">
                      {new Date(chat.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    className="delete-chat-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteChat(chat._id);
                    }}
                  >
                    🗑️
                  </button>
                </div>
              ))
            )}
          </div>

          {chats.length > 0 && (
            <button className="clear-all-btn" onClick={handleClearAll}>
              Clear All Chats
            </button>
          )}
        </aside>

        <div className="chat-main">
          <div className="chat-header">
            <button
              className="toggle-sidebar-btn"
              onClick={() => setShowHistory(!showHistory)}
            >
              ☰
            </button>
            <h1>AI Chat Assistant</h1>
          </div>

          <div className="chat-messages">
            {messages.length === 0 && !currentChat && (
              <div className="welcome-section">
                <h2>Welcome to AI Chat</h2>
                <p>Start a new conversation or select from your chat history</p>
                <button className="get-started-btn" onClick={handleNewChat}>
                  Get Started
                </button>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.role}`}>
                <div className="message-content">
                  <p>{msg.content}</p>
                  <span className="message-time">
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="message assistant">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <div className="input-wrapper">
              <input
                type="text"
                className="chat-input"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                disabled={loading}
              />
              <button
                className="send-btn"
                onClick={handleSendMessage}
                disabled={loading || !input.trim()}
              >
                {loading ? '⏳' : '→'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
