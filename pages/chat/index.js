// pages/chat.js
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const Chat = () => {
  const { data: session, status } = useSession();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch messages from your server or database
    // Example: fetchMessages();
  }, []);

  const fetchMessages = async () => {
    // Fetch messages from your server or database
    // Update the messages state
  };

  const handleSendMessage = async () => {
    // Send the new message to your server or database
    // Example: sendMessage();
  };

  const sendMessage = async () => {
    // Send the new message to your server or database
    // Fetch the updated messages and update the messages state
    await fetchMessages();
  };

  return (
    <div>
      <h1>Messenger Chat</h1>
      {status === 'authenticated' && (
        <div>
          <p>Welcome, {session.user.name}!</p>
          <div>
            <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
              {messages.map((message) => (
                <div key={message.id}>
                  <strong>{message.sender}</strong>: {message.text}
                </div>
              ))}
            </div>
            <div>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      )}
      {status === 'unauthenticated' && (
        <p>Please sign in to access the chat.</p>
      )}
    </div>
  );
};

export default Chat;
