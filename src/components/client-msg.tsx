"use client";

import React from "react";

const ClientMessage: React.FC = () => {
  return (
    <span>
      ClientMessage:{" "}
      <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
        {process.env.NEXT_PUBLIC_MSG ?? "No message"}
      </code>
    </span>
  );
};

export default ClientMessage;
