import React, { useState } from 'react'
import ChatBotStart from './components/ChatBotStart'
import ChatBoxApp from './components/ChatBoxApp'

const App = () => {
  const [isChatting, setIsChatting] = useState(false)

  const handleChatStart = () => {
    setIsChatting(true)
  }

  const handleGoBack = () => {
    setIsChatting(false)
  }

  return (
    <div className='container'>
      { isChatting ? <ChatBoxApp onGoBack={handleGoBack} /> : <ChatBotStart onStartChat={handleChatStart} /> }
    </div>
  )
}

export default App