import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div>
        <button>valide</button>
      </div>
      <div>{children}</div>
    </>
  );
}
