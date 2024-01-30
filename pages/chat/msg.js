import React from 'react';
import Messegecalllist from './Messegecalllist';

// Define message data
const messages = [
  {
    id: 1,
    content: "Hey, কেমন  আছো?",
    timestamp: "11:23 AM",
    sender: "other",
    profileImage: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS2ajWBAMLqptY72y6lkG__9AyFvazHB9_y1ehP-_xM8tUbwuL0SzSTVokPBrmfh4lkpDy15--faH8nbd4", // Profile image URL for the sender
  },
  {
    id: 2,
    content: "Hey, I'm doing well. How about you?",
    timestamp: "11:25 AM",
    sender: "self",
    profileImage: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png", // Profile image URL for the sender
  },
  {
    id: 1,
    userName: "Rakib",
    content: "আলহামদুল্লিাহ ভালো আছি ‍?",
    timestamp: "11:23 AM",
    sender: "other",
    profileImage: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS2ajWBAMLqptY72y6lkG__9AyFvazHB9_y1ehP-_xM8tUbwuL0SzSTVokPBrmfh4lkpDy15--faH8nbd4", // Profile image URL for the sender
  },
  // Add more messages as needed
];

// Message component
function Message({ message,  }) {
  const { content, timestamp, sender, profileImage, userName } = message;

  return (
    <div className={`message ${sender === 'self' ? 'self' : 'other'} flex mb-4`}>
      {sender === 'other' && (
        <img src={profileImage} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
      )}
      <div className={`py-2 px-4 rounded-lg ${sender === 'self' ? 'bg-red-700 text-white self-end' : 'bg-gray-200 text-gray-800'} ${sender === 'self' ? 'ml-auto' : 'mr-auto'}`}>
        <div className="content">{content}</div>
        <div className="timestamp text-xs text-gray-500">{timestamp}</div>
      </div>
      {sender === 'self' && (
        <img src={profileImage} alt="Profile" className="w-8 h-8 rounded-full ml-2" />
      )}
    </div>
  );
}

// MessageList component
function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}

// Messenger component
function Messenger() {
  return (
    <div className="messenger p-4">
       <Messegecalllist/>
     <div className='mt-3'>
        <MessageList messages={messages} />
     </div>
    </div>
  );
}

export default Messenger;
