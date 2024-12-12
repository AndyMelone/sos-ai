import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full">
      <div>
        <button>valide</button>
      </div>
      <div className="flex">
        <div className="w-3/5">{children}</div>
        <div className="w-2/5 border">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}
