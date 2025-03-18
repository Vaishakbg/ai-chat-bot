import React, { useState } from 'react'
import ChatBotStart from './components/ChatBotStart'
import ChatBoxApp from './components/ChatBoxApp'

const App = () => {
  const [isChatting, setIsChatting] = useState(false);
  const [chats, setChats] = useState([]);

  const handleStartChat = () => {
    setIsChatting(true)

    if (chats.length === 0) {
      const newChat = {
        id: `Chat ${new Date().toLocaleDateString("en-GB")} ${new Date().toLocaleTimeString()}`,
        messages: [],
      }
      setChats([newChat])
    }
  }

  const handleGoBack = () => {
    setIsChatting(false)
  }

  return (
    <div className='container'>
      { isChatting ? (
        <ChatBoxApp onGoBack={handleGoBack}
          chats={chats} setChats={setChats} />
        ) : (
        <ChatBotStart onStartChat={handleStartChat} />
        )}
    </div>
  )
}

export default App