import React from "react";

const ServerMessage: React.FC = () => {
  return (
    <div>ServerMessage: {process.env.NEXT_PUBLIC_MSG ?? "No message"}</div>
  );
};

export default ServerMessage;
