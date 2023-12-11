import React from "react";

export const metadata = {
    title: "Profile Layout",
    description: "Profile Layout",
};
    

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
