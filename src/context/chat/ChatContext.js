import React, { useReducer } from 'react'
import { createContext } from "react";
import { chatReducer } from './chatReducer';

export const ChatContext = createContext();

const initialState = {
  uid: '',
  chatActivo: null, //UID al usuario al que quiero enviar msg
  usuarios: [], // Al users in the DB
  mensajes: [] // The chat selected
}

export const ChatProvider = ({ children }) => {

  const [chatState, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value = {{
      chatState,
      dispatch
    }}>
      {children}
    </ChatContext.Provider>
  )
}

