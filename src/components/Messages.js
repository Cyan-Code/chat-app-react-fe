import React from "react";
import { IncomingMessage } from "./IncomingMessage";
import { OutGoingMessage } from "./OutGoingMessage";
import { SendMessage } from "./SendMessage";

export const Messages = () => {

  return (
    <div className="mesgs">
      {/* <!-- Historia inicio --> */}
      <div className="msg_history">    
        <IncomingMessage />
        <OutGoingMessage />
      </div>        
      <SendMessage />    
    </div>
  );
};
