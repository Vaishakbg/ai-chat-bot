import React, { useState } from 'react'
import ChatBotStart from './components/ChatBotStart'
import ChatBoxApp from './components/ChatBoxApp'
import {v4 as uuidv4} from 'uuid'

const App = () => {
  const [isChatting, setIsChatting] = useState(false);
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null)

  const handleStartChat = () => {
    setIsChatting(true)

    if (chats.length === 0) {
      createNewChat();
    }
  }

  const handleGoBack = () => {
    setIsChatting(false)
  }

  const createNewChat = (initialMessage = "") => {
    const newChat = {
      id: uuidv4(),
      displayId: `Chat ${new Date().toLocaleDateString("en-GB")} ${new Date().toLocaleTimeString()}`,
      messages: initialMessage ? [ {type:"prompt", text: initialMessage, timestamp: new Date().toLocaleTimeString()}] : []
    }

    const updatedChat = [newChat, ...chats]
    setChats(updatedChat);
    setActiveChat(newChat.id);
  }

  return (
    <div className='container'>
      { isChatting ? (
        <ChatBoxApp onGoBack={handleGoBack}
          chats={chats} setChats={setChats} 
          activeChat={activeChat}
          setActiveChat={setActiveChat}
          onNewChat={createNewChat} />
        ) : (
        <ChatBotStart onStartChat={handleStartChat} />
        )}
    </div>
  )
}

export default App