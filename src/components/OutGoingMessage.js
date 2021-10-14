import React from "react";
import { horaMes } from "../helpers/horaMes";

export const OutGoingMessage = ({msg}) => {
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{msg.mensaje}</p>
        <span className="time_date">{horaMes(msg.createAt)}</span>
      </div>
    </div>
  );
};
