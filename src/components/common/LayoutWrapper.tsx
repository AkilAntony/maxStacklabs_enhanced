import { type ReactNode } from "react";
import Navbar from "./Navbar";

const LayoutWrapper = ({
  children,
  contentStyles,
}: {
  children: ReactNode;
  contentStyles?: string;
}) => {
  return (
    <div className="min-h-screen relative flex flex-col">
      <div className="z-50 sticky top-0">
        <Navbar />
      </div>

      <div
        className={`flex flex-col justify-center items-center flex-1 ${contentStyles}`}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
