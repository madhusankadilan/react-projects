import type { ButtonHTMLAttributes } from "react";

// type Props = {
//    children: ReactNode;
//    className?: string;
// }

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: Props) => {
   const { children, className: customClassName } = props;
   const className = `btn btn-default ${customClassName ?? ''}`;

   return <button className={className}>{children}</button>;
};

export default Button;
