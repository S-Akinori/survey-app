import React, { HTMLAttributes } from "react";

const Box = ({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={
        `bg-main text-main-cont px-4 py-2 ${
          className
        }`
      }
    >
      {children}
    </div>
  );
};

export default Box;

export const BorderBox = ({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={
        `border-2 border-main px-4 py-2 ${
          className
        }`
      }
    >
      {children}
    </div>
  );
}