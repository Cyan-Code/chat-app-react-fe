import React, { useContext, useEffect } from "react";
import { createContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { scrollToBottonAnimated } from "../helpers/scrollToBottom";
import { useSocket } from "../hooks/useSocket";
import { types } from "../types/types";
import { ChatContext } from "./chat/ChatContext";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online, conectarSocket, desconectarSocket } = useSocket("http://localhost:8080");
  const {auth} = useContext(AuthContext)
  const {dispatch} = useContext(ChatContext)

  useEffect(() => {
    if (auth.logged) {
      conectarSocket();
    }
  },[auth, conectarSocket]);
  
  useEffect(() => {
    if (!auth.logged) {
      desconectarSocket();
    }
  },[auth, desconectarSocket]);

  //Escuchar los usuarios conectados
  useEffect(() => {
    socket?.on('lista-usuarios', (usuarios) => {
      dispatch({
        type: types.usuariosCargados,
        payload: usuarios
      })
    })
  },[socket, dispatch])

  useEffect(() => { // Escuchando los mensajes que me enviaron y modificar el estado
    socket?.on('mensaje-personal', (mensaje) => {
      dispatch({
        type: types.nuevoMensaje,
        payload: mensaje
      })
    })

    scrollToBottonAnimated('mensajes');

  },[socket, dispatch])

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
