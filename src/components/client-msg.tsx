"use client";

import { useEnv } from "@/lib/env/provider";
import React from "react";

const ClientMessage: React.FC = () => {
  const env = useEnv();

  return (
    <span>
      ClientMessage:{" "}
      <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
        {JSON.stringify(env, null, 2)}
      </code>
    </span>
  );
};

export default ClientMessage;
