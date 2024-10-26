"use client";

import React from "react";

const ClientMessage: React.FC = () => {
  return (
    <div>ClientMessage: {process.env.NEXT_PUBLIC_MSG ?? "No message"}</div>
  );
};

export default ClientMessage;
