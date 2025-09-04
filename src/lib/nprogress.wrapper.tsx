"use client";

import { AppProgressProvider } from "@bprogress/next";

const NProgressProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProgressProvider
      height="2px"
      color="#ccc"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </AppProgressProvider>
  );
};

export default NProgressProviders;
