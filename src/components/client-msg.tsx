"use client";

import React from "react";

const ClientMessage: React.FC = () => {
  return <p>ClientMessage: {process.env.NEXT_PUBLIC_MSG ?? "No message"}</p>;
};

export default ClientMessage;
