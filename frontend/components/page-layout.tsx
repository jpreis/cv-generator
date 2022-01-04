import { FC } from "react";

export const PageLayout: FC = ({ children }) => {
  return (
    <div className="container h-100 mx-auto h-screen px-4 py-24 overflow-scroll">
      {children}
    </div>
  );
};
