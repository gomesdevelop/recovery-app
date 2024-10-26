import React from "react";

const ServerMessage: React.FC = () => {
  return <p>ServerMessage: {process.env.NEXT_PUBLIC_MSG ?? "No message"}</p>;
};

export default ServerMessage;
