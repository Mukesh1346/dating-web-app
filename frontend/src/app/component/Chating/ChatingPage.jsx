'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react'; // Lock icon
import pic1 from '../../Images/user/user1.jpeg';
import pic2 from '../../Images/user/user2.jpeg';
import pic3 from '../../Images/user/user2.jpg';
import './chating.css';
import ChatList from '../ChatList/Chatlist';
import ChatWindow from '../ChatWindow/ChatWindow';

const chatsData = [
  { id: 1, name: 'Alice', messages: ['Hi!', 'How are you?'], profileImage: pic1, timing: '12:40' },
  { id: 2, name: 'Bob', messages: ['Hello!', 'What’s up?'], profileImage: pic2, timing: '03:12' },
  { id: 3, name: 'Charlie', messages: ['Hey there!', 'Long time no see.'], profileImage: pic3, timing: '12:00' },
  { id: 4, name: 'Alice', messages: ['Hi!', 'How are you?'], profileImage: pic1, timing: '12:40' },
  { id: 5, name: 'Bob', messages: ['Hello!', 'What’s up?'], profileImage: pic2, timing: '03:12' },
  { id: 6, name: 'Charlie', messages: ['Hey there!', 'Long time no see.'], profileImage: pic3, timing: '12:00' },
  { id: 7, name: 'Alice', messages: ['Hi!', 'How are you?'], profileImage: pic1, timing: '12:40' },
  { id: 8, name: 'Bob', messages: ['Hello!', 'What’s up?'], profileImage: pic2, timing: '03:12' },
  { id: 9, name: 'Charlie', messages: ['Hey there!', 'Long time no see.'], profileImage: pic3, timing: '12:00' },
  { id: 10, name: 'Charlie', messages: ['Hey there!', 'Long time no see.'], profileImage: pic3, timing: '12:00' },
];

const ChatingPage = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [chatList, setChatList] = useState(chatsData);
  const [newMessage, setNewMessage] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust this if needed
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const selectedChat = chatList.find((chat) => chat.id === selectedChatId);

  const handleSendMessage = () => {
    if (newMessage.trim() === '' || !selectedChatId) return;

    const updatedChats = chatList.map((chat) => {
      if (chat.id === selectedChatId) {
        return {
          ...chat,
          messages: [...chat.messages, newMessage],
        };
      }
      return chat;
    });

    setChatList(updatedChats);
    setNewMessage('');
  };

  // 👇 Mobile Lock View
  if (isMobile) {
    return (
      <div className="mobile-redirect-container">
        <div className="lock-icon">
          <Lock size={40} />
        </div>
        <h2>Mobile Access Only</h2>
        <p>To access this feature, please use our mobile app.</p>
        <button
          className="redirect-button"
          onClick={() => router.push('https://yourappdownloadlink.com')}
        >
          Open in App
        </button>
      </div>
    );
  }

  // 👇 Default Desktop Chat View
  return (
    <div style={{ display: 'flex' }}>
      <ChatList
        chatList={chatList}
        selectedChatId={selectedChatId}
        setSelectedChatId={setSelectedChatId}
      />
      <ChatWindow
        selectedChat={selectedChat}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ChatingPage;
