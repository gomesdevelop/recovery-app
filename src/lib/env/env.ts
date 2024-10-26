"use server";

import { envsafe, str } from "envsafe";

export const getEnv = async () =>
  envsafe({
    NEXT_PUBLIC_MSG: str(),
  });
