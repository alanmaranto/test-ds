import type { ReactNode, ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className="bg-blue-700" {...props}>
      {children}
    </button>
  );
};
