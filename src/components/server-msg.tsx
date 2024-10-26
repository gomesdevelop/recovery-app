import React from "react";

const ServerMessage: React.FC = () => {
  return (
    <span>
      ServerMessage:{" "}
      <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
        {process.env.NEXT_PUBLIC_MSG ?? "No message"}
      </code>
    </span>
  );
};

export default ServerMessage;
